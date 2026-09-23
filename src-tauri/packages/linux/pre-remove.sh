#!/bin/bash
/usr/bin/clash-meta-service-uninstall

. /etc/os-release

if [ "$ID" = "deepin" ]; then
    if [ -f "/usr/share/applications/clash-meta.desktop" ]; then
        echo "Removing deepin desktop file"
        rm -vf "/usr/share/applications/clash-meta.desktop"
    fi
fi

