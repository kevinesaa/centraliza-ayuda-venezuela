import sys
import os
import json
import re

DEFAULT_INPUT_PATH:str = "data_source_helper/new_sources.json"
DEFALUT_PLAIN_DATA:str = "data_source_helper/plain_sources.json"
DEFAULT_OUTPUT_PATH:str = "js/data_source_json.js"


def write_text_to_file(output_path:str,content:str):
    jsFile = open(output_path,'w', encoding='utf-8')
    jsFile.write(content)
    jsFile.close()

def update_plain_source(output_path:str,json_object:str):
    json_str = json.dumps(json_object,indent=4)
    write_text_to_file(output_path,json_str)


def update_api_json_source(output_path:str,json_object:dict|list):
    json_str = json.dumps(json_object,indent=4)
    json_str = f"const SOURCES = {json_str}"
    write_text_to_file(output_path,json_str)

def clean_input(output_path:str):
    write_text_to_file(output_path,"[]")

def read_json(path:str) -> dict | list:
    jsonFile = open(path, 'r',encoding='utf-8')
    myJson = json.load(jsonFile)
    jsonFile.close()
    return myJson

def read_current_source(path:str) -> list:
    return read_json(path)

def read_new_source(path:str) -> list:
    sources = []
    try:
        sources = read_json(path)
    finally:
        return sources

def normalize_single_text(text:str) -> str:
    text = text.replace("\n"," ")
    return re.sub(r'\s+', ' ', text).strip()

def normalize_texts(json_list:list)  -> list:
    
    for item in json_list:
        item["nombre"] = normalize_single_text(item["nombre"])
        item["descripcion"] = normalize_single_text(item["descripcion"])
    
    return json_list

def normalize_single_url(url:str) -> str:
    return url.lower()

def normalize_urls(json_list:list) -> list:
    
    for item in json_list:
        item["url"] = normalize_single_url(item["url"])
    
    return json_list

def get_max_id(json_list:list) -> int:
    return len(json_list)

def unique_source(json_list) -> dict:
    my_dict = {}
    for item in json_list:
        key = item["url"]
        my_dict[key] = item
    return my_dict

def build_new_entry(source:dict) -> dict:
    return {
        "nombre": source["nombre"],
        "url": source["url"],
        "descripcion": source["descripcion"]
    }

if __name__ == "__main__":

    current_sources:list = read_current_source(DEFALUT_PLAIN_DATA)
    current_sources:list = normalize_urls(current_sources)
    current_sources:list = normalize_texts(current_sources)
    max_id:int = get_max_id(current_sources)
    unique_source_entries:dict = unique_source(current_sources)
    unique_source_keys = unique_source_entries.keys()

    new_entries_source:list = read_new_source(DEFAULT_INPUT_PATH)
    new_entries_source:list = normalize_urls(new_entries_source)
    new_entries_source:list = normalize_texts(new_entries_source)
    unique_new_entries:dict = unique_source(new_entries_source)
    
    next_id = max_id
    
    for key,value in unique_new_entries.items():
        
        if (key not in unique_source_keys):
            new_entry = build_new_entry(value)
            next_id = next_id + 1
            new_entry["id"] = next_id
            current_sources.append(new_entry)
    
    update_plain_source(DEFALUT_PLAIN_DATA,current_sources)
    update_api_json_source(DEFAULT_OUTPUT_PATH,current_sources)
    clean_input(DEFAULT_INPUT_PATH)