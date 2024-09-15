#!/bin/bash

# Function to display usage information
usage() {
    echo "Usage: $0 [-f]"
    echo "  -f    Force kill processes without confirmation"
    exit 1
}

# Initialize force flag
force=false

# Parse command line options
while getopts ":f" opt; do
    case ${opt} in
        f )
            force=true
            ;;
        \? )
            usage
            ;;
    esac
done

# Get the list of processes
processes=$(ps -ef | grep -E '\.n/bin|\.nvm' | grep -v grep | awk '{print $2 " " $8}')

# Check if any processes were found
if [ -z "$processes" ]; then
    echo "No processes containing '.n/bin' or '.nvm' found."
    exit 0
fi

# Display the processes
echo "The following processes containing '.n/bin' or '.nvm' were found:"
echo "$processes"
echo

# Ask for confirmation unless force flag is set
if [ "$force" = false ]; then
    read -p "Do you want to kill these processes? (y/N): " confirm
    if [[ ! $confirm =~ ^[Yy]$ ]]; then
        echo "Operation cancelled."
        exit 0
    fi
fi

# Kill the processes
echo "$processes" | while read pid cmd; do
    if kill -9 $pid 2>/dev/null; then
        echo "Killed process $pid ($cmd)"
    else
        echo "Failed to kill process $pid ($cmd)"
    fi
done

echo "Operation completed."