 Register
Back
Written by:
jahid_0903014   Score: 12
votes: 14
Format: Article
 install latest eclipse in linux mint

if you want the latest eclipse then go to the eclipse official site:

www.eclipse.org

and then to the downloads section.

http://www.eclipse.org/downloads/index.php

now you will see the latest versions available

for now its eclipse kepler 4.3.1 and in the developer builds : eclipse luna 4.4 M4 (21th Dec 2013)

if you go to the above link from linux then you will be presented with the linux versions by default. if you go to the website within other OS, make sure you select the right platform.

then download the right choice of yours ( for me its eclipse standard 4.3.1 or 4.4 M4)

you can select any mirror you like (i downloaded from the main site at canada)

after downloading

you will see a archive named like eclipse-standard*.tar.gz

1. make a folder

mkdir /home/user/eclipse_version

(user is your user name)

or simply create a new folder in the /home/user directory by right clicking with the name eclipse_version

2. extract the archive into this directory with archive manager

or

tar -zxvf file_name.tar.gz -C /home/user/eclipse-version

now eclipse is already installed, it's in the directory /home/user/eclipse-version/eclipse

to run eclipse from the install directory

go to the directory /home/user/eclipse-version/eclipse

and double click the file "eclipse" and that's it.

to run eclipse from a desktop launcher

right click on the desktop and choose "create a new launcher here"

in name type Eclipse version(Luna) or whatever you want

in command type /home/user/eclipse-version/eclipse/eclipse

you can change the icon by clicking on it and browsing the eclipse icon in

/home/user/eclipse-version/eclipse directory

you can add comment if you like in the comment section.

now hit OK.

a desktop shortcut will be created for you.

to run eclipse from the menu

1. in the terminal enter this code:

sudo gedit /usr/share/applications/eclipse-luna.desktop

eclipse-luna will be replaced  by your app name

2. copy paste the following lines into the newly opened .desktop file

[Desktop Entry]
Encoding=UTF-8
Exec=/home/user/eclipse-version/eclipse/eclipse
Icon=/home/user/eclipse-version/eclipse/icon.xpm
Type=Application
Terminal=false
Comment=Eclipse Integrated Development Environment
Name=Eclipse Luna
GenericName=eclipse-4.4 M4
StartupNotify=false
Categories=Development;IDE;Java;

*[Desktop Entry]
Type=Application
Name=Arduino IDE
GenericName=Integrated Development Environment
Comment=An IDE for Arduino-compatible electronics prototyping platforms
Exec=arduino
Icon=arduino
Terminal=false
Categories=Development;IDE;Electronics;
MimeType=text/x-arduino
Keywords=embedded electronics;electronics;avr;microcontroller;*


user will be replaced by your user name. (must).

For Exec and Icon, the path should be correct i.e you must change "user"  & "eclipse-version" according to your path. (must).

in "Name= Eclipse Luna " you can change the name whatever you want.(optional).

in "GenericName" you can put whatever you want. you can cut off this line too.(optional).

save & exit the .desktop file.

a new entry named "Eclipse Luna" will be added in the menu under the programming section.

3. now go to menu->programming->Eclipse Luna.

Enjoy... your eclipse environment....
