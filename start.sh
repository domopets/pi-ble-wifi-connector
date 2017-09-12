#!/bin/bash
cd `dirname $0`
sudo hciconfig hci0 up
sudo node index
