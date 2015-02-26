hintCodes
=========


Repositório destinado apenas para dicas de comandos. Alguns interessantes.



####No git

Configurar log em grafo no git
* `~/.gitconfig` add:

```
[alias]
lg1 = log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
lg2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n'' %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
lg = !"git lg1"
```

####No Vi & Vim

To eneble mouse:
* set number
* set mouse=a

####Deleção

* `find ./ -name "*.mp3" -delete`

*Se não.. este é o mais "arcaico" e certamente funciona:*

* `find . -name 'mtg_*' -print -exec rm {} \;`
