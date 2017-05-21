**At first, you need to download the *tar.gz from the official website, then types:**
```
mkdir tmp_dir
tar xvfvz install_flash_player_*.tar.gz -C ./tmp_dir
cd tmp_dir
```

To install:
```
sudo cp -r usr /
mkdir -p ~/.mozilla/plugins
cp libflashplayer.so ~/.mozilla/plugins
```
*...or the last command could be:*
```
sudo cp libflashplayer.so /usr/lib/mozilla/plugins
```

When updatting just do the last one.

> I prefer the last solution.
> [thanks](http://xmodulo.com/how-to-install-adobe-flash-player-on-linux.html)
