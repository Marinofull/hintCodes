**At first, you need to download the *tar.gz from the official website, then types:**
```
mkdir tmp_dir
tar xvfvz install_flash_player_*.tar.gz -C ./tmp_dir
cd tmp_dir
```

depending of your configuration try: 
```
sudo cp -r usr /
mkdir -p ~/.mozilla/plugins
cp libflashplayer.so ~/.mozilla/plugins
```
*...or try it:*
```
sudo cp libflashplayer.so /usr/lib/mozilla/plugins
```
> I prefer the last solution, but it depends how your flash is installed
> [thanks](http://xmodulo.com/how-to-install-adobe-flash-player-on-linux.html)
