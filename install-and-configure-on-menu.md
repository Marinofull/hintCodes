you will see a archive named like file.tar.gz

1. make a folder

mkdir /home/user/.folder

2. extract the archive into this directory with archive manager

or

tar -zxvf file_name.tar.gz -C /home/user/.folder
tar xpvf file_name.tar.xz -C /home/user/.folder

now eclipse is already installed, it's in the directory /home/user/.folder/binary


1. in the terminal enter this code:

sudo gedit /usr/share/applications/file.desktop

2. copy paste the following lines into the newly opened .desktop file

[Desktop Entry]
Encoding=UTF-8
Exec=/home/user/foo-version/foo/bar
Icon=/home/user/foo-version/foo/icon.xpm
Type=Application
Terminal=false
Comment=Lorem Ipsum sit amet dolor
Name=Foo Bar
GenericName=Foo bar Doe
StartupNotify=false
Categories=Development;IDE;Foo;Bar;Shell;

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


in "Name= Foo bar " you can change the name whatever you want.(optional).

in "GenericName" you can put whatever you want. you can cut off this line too.(optional).

save & exit the .desktop file.

a new entry named "Foo bar" will be added in the menu under the programming section.

3. now go to menu->programming->Foo bar.
