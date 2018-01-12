#!/bin/bash

cp systemd-BleWifiConnector.service /etc/systemd/system/BleWifiConnector.service
systemctl enable BleWifiConnector.service
systemctl start BleWifiConnector.service
