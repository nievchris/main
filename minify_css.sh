#!/bin/bash

# Check if the cssmin package is installed
if ! command -v cssmin &> /dev/null; then
    echo "cssmin is not installed. You can install it using 'pip install cssmin'."
    exit 1
fi

# Check for the correct number of arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 input.css output.min.css"
    exit 1
fi

input_file="$1"
output_file="$2"

# Check if the input file exists
if [ ! -f "$input_file" ]; then
    echo "Input file '$input_file' not found."
    exit 1
fi

# Minify the CSS and save it to the output file
cssmin "$input_file" > "$output_file"

if [ $? -eq 0 ]; then
    echo "CSS minified and saved to '$output_file'."
else
    echo "Failed to minify CSS."
    exit 1
fi
