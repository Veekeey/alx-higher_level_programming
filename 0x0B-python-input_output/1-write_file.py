#!/usr/bin/python3
def write_file(file="", text=""):
    with open(filename, mode='w', encoding='utf-8') as f:
        return f.write(text)
