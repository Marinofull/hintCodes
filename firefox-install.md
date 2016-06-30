```
cd ~/Downloads/
cp firefox*.tar.bz2 /opt/
cd /opt/
tar -xvf firefox*.tar.bz2
rm firefox*.bz2
```
#Removing iceweasel

```
# apt-get remove iceweasel
ln -sf /opt/firefox/firefox /usr/bin/firefox
ln -sf /opt/firefox/firefox /usr/bin/firefox.real
ln -sf /opt/firefox/browser/icons/mozicon128.png /usr/share/icons/hicolor/128x128/apps/firefox.png
ln -sf /opt/firefox/browser/icons/mozicon128.png /usr/share/pixmaps/firefox.png
cd /usr/share/applications/
```

#Creating entry for firefox on gnome applications
```
cat <<EOF > firefox.desktop
[Desktop Entry]
Encoding=UTF-8
Name=Firefox
Comment=Por uma Internet Livre
GenericName=Web Browser
X-GNOME-FullName=Firefox Web Browser
Exec=/opt/firefox/firefox %u
Terminal=false
X-MultipleArgs=false
Type=Application
Icon=firefox
Categories=Network;WebBrowser;
MimeType=text/html;text/xml;application/xhtml+xml;application/xml;application/vnd.mozilla.xul+xml;application/rss+xml;application/rdf+xml;image/gif;image/jpeg;image/png;x-scheme-handler/http;x-scheme-handler/https;
StartupWMClass=Firefox-bin
StartupNotify=true
EOF
```
