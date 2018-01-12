#!/bin/bash

systemctl stop BleWifiConnector.service
systemctl disable BleWifiConnector.service
rm /etc/systemd/system/BleWifiConnector.service
