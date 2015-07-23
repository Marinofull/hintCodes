**At first, you need to download the *tar.gz from the official website, then types:**
```
mkdir tmp_dir
tar xvfvz install_flash_player_*.tar.gz -C ./tmp_dir
```
```
cd tmp_dir
sudo cp -r usr /
```
<br><br>
**...following you can do this:**

```
mkdir -p ~/.mozilla/plugins
cp libflashplayer.so ~/.mozilla/plugins
```
*...or try it:*
```
sudo cp libflashplayer.so /usr/lib/mozilla/plugins
```
> [thanks](http://xmodulo.com/how-to-install-adobe-flash-player-on-linux.html)
