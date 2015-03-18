CLÁUSULA PRIMEIRA - A MANEIRA RECOMENDADA
A maneira recomendada é usando o Gerenciador de Aplicativos pois este baixa e instala automaticamente não só o seu programa, mas também as dependências do programa (bibliotecas ou outros programas necessários para a execução do programa) e os programas recomendados (como add-ons). O Gerenciador de Aplicativos chama de "pacotes". Você também pode desinstalar programas facilmente a partir do Gerenciador de Aplicativos (programas instalados têm uma marca de seleção verde em seu ícone, no Gerenciador de Aplicativos).

Todos os programas que você instala a partir do Gerenciador de Aplicativos são baixados dos repositórios centrais de programas (os repositórios padrão para Linux Mint suportam bem mais de 60.000 programas), e quaisquer atualizações de segurança ou correções a esses programas são todos tratados automaticamente pelo Gerenciador de Atualizações.

Notas:
- apt-get: Nos fóruns muitas vezes você vai ver sugestões para executar um comando como "sudo apt-get install programa" a partir do terminal para instalar um programa. Este comando é apenas uma versão terminal do Gerente de Aplicativos; qualquer programa instalado desta forma também aparece no Gerenciador de Aplicativos e também será atualizado pelo Gerenciador de Atualizações. Você também pode encontrar a alternativa abreviada que está disponível no Linux Mint, que seria parecido com "apt install programa", e faz o mesmo.

- Synaptic: Outra alternativa que talvez você veja sugerida para uso é o Gerenciador de Pacotes Synaptic. O Gerenciador de Aplicativos e Gerenciador de pacotes Synaptic ambos trabalham da mesma forma sob o capô. O Gerenciador de Aplicativos é mais amigável, o Gerenciador de pacotes Synaptic tem funções avançadas como reparar pacotes quebrados.

CLÁUSULA SEGUNDA - OS CAMINHOS ALTERNATIVOS
Às vezes, o Gerenciador de Aplicativos não tem o programa ou a versão que você precisa. Se isso acontecer, você pode encontrar quase sempre um repositório PPA que você pode adicionar ou baixar o programa que você precisa em vários formatos de pacotes para instalar manualmente (se isso acontecer, você deve garantir que vai para o site oficial do pacote, mesmo em Linux há pessoas mal-intencionadas lá fora). Os formatos de pacotes mais comuns são .rpm, .deb, e um tarball (arquivos com a extensão .tgz, .tar.gz, .tar.bz2, ou similar). Linux Mint pode usar .deb e tarballs diretamente.

1. Adicionar um repositório PPA: Um Personal Package Archive (PPA) é um repositório que você pode adicionar ao seu sistema, de modo que você pode instalar programas a partir dele com o Gerenciador de Aplicativos. É a maneira mais fácil de fazer mais programas disponíveis no Linux Mint, e você pode usar todos os PPAs do Ubuntu no Linux Mint. PPAs são todos hospedados em Launchpad, que é usado por desenvolvedores de software populares para fazer upload de seu software.

Nos fóruns você vai ver muitas vezes sugestões para adicionar um repositório PPA, para obter algum programa novo, ou uma versão mais recente de um programa, instalável. Por exemplo, para instalar o Y PPA Manager, os comandos compartilhados seriam:
sudo add-apt-repository ppa:webupd8team/y-ppa-manager 
sudo apt-get update 
sudo apt-get install y-ppa-manager

A partir do Linux Mint 15 adicionar um PPA é ainda mais fácil: Abra Fontes de Aplicativos de a partir seu menu e clique no botão PPA e você pode adicionar diretamente o PPA lá sem a necessidade de usar o terminal para os comandos acima. Por exemplo, para adicionar o PPA acima você usaria o texto "ppa:webupd8team/y-ppa-manager".

Para encontrar PPAs para os programas que você quer, você pode fazer uma pesquisa de internet por "ppa programa", que geralmente dá bons resultados, ou você pode instalar o Y PPA Manager. O Y PPA Manager é um programa de interface gráfica que permite que você pesquise PPAs de Laucnhpad diretamente, e tem vários outros recursos para gerenciar PPAs. Você já sabe como instalá-lo

2. Instalar um pacote .deb: Arquivos .deb são como arquivos .exe no Windows. Você mesmo os baixa da internet, e os instala em apenas alguns cliques. Para instalar o pacote clique duas vezes nele, ou clique com o botão direito sobre ele e escolha a opção "Abrir com Instalador de Pacotes GDebi". Digite sua senha, se solicitado. O restante deve ser automático.

Normalmente você vai encontrar um pacote .deb para Ubuntu; aqueles irão trabalhar com Linux Mint (você pode encontrar a versão do Ubuntu em que o seu Linux Mint é baseado aqui, na coluna "Package Base", ou perguntar nos fóruns para obter ajuda sobre isto).

3. Instale vários pacotes .deb: Como uma alternativa à descrição anterior "Instalar um pacote .deb", se você tiver vários arquivos .deb que deseja instalar, você pode facilmente instalá-los de uma só vez. Para fazê-lo, coloque todos os arquivos .deb que você deseja instalar numa única pasta. Então, em seu gerenciador de arquivos (como Nautilus, Caja, Golfinho, ou Thunar) navegue até a pasta e selecione Arquivo> Abrir Pasta no Terminal a partir do menu. No terminal digite o seguinte comando:
sudo dpkg -i *.deb

Você será solicitado por sua senha, por favor digite-a e pressione Enter para continuar (nenhum feedback será exibido na tela enquanto você digita, ou seja, como esperado). Isto irá instalar todos os arquivos .deb dentro da pasta. Se os arquivos .deb tem dependências que são atendidas por outros arquivos .deb nessa pasta, este comando irá instalar os arquivos .deb na ordem correta para atender a essas dependências. Se houver dependências não satisfeitas (pacotes necessários, mas faltando em seu sistema e nesta pasta), você será informado desse facto.

4. Tarballs: Um tarball é geralmente o código fonte comprimido de seu programa, e que você precisa compilar primeiro, à fim de ser capaz de usá-lo (às vezes em vez disso, ele é um arquivo com o código fonte já compilado, consulte a próxima seção). Estes podem ser mais complicado para instalar, mas torna-se mais fácil depois de ter feito isso algumas vezes. A primeira coisa que você precisa fazer é navegar para a localização do tarball, clicar duas vezes nele, e extrair o conteúdo.

Agora que o tarball está descompactado você precisa percorrer o conteúdo até encontrar um arquivo que é chamado de "INSTALL" (alternativamente, você pode precisar verificar o "README" ou até mesmo o site do programa). Nesse arquivo você deve encontrar instruções sobre como instalar o seu pacote em particular. Ele também deve te dizer quais são as dependências. Primeiro verifique se você tem as dependências instaladas. Se estiverem faltando quaisquer uma delas, use o Gerenciador de Aplicativos para verificar se estão lá e com as versão corretas. Então instale-as, se não tiver outra .deb ou tarball para baixar. Se você tem todas elas agora você vai querer continuar lendo através do arquivo até encontrar as instruções sobre como instalar. A maneira usual é navegar para o diretório extraído e selecione Arquivo > Abrir no Terminal, e de lá execute:
./configure 
make 
sudo make install

Se você instalá-lo assim, não poderá desinstalar o programa a partir do Gerenciador de Aplicativos. Por isso, é altamente recomendado para instalar primeiro o programa checkinstall (sudo apt-get install checkinstall), o que permitirá que você desinstale tarballs a partir do Gerenciador de Aplicativos. Substituir a última "sudo make install" das instruções com o seguinte para adicionar uma opção de desinstalação do Gerenciador de Aplicativos:
sudo checkinstall


CLÁUSULA TERCEIRA - SOFTWARE PROPRIETÁRIO E JOGOS
Software proprietário e jogos, geralmente não são código livre, muitas vezes vêm de outras maneiras para instalar. Duas formas comuns são:

- Um único arquivo binário que você baixar e executar para instalá-lo. Normalmente, com uma extensão de nome de arquivo como .run, .sh ou .bin. Depois de baixar o arquivo, clique direito do mouse, escolha Propriedades, escolha Permissões e marque "Permitir execução do arquivo como um programa". Em seguida, clique duas vezes nele para iniciar o instalador.

- Um arquivo, como um tarball ou um .zip, que você baixa e extrai para sua pasta pessoal de usuário. Ao contrário do tarball discutido na seção anterior, este não deverá conter o código-fonte e sim o programa já compilado. Você extrair o conteúdo do arquivo para uma pasta na pasta pessoal de usuário e começa de lá (consulte o arquivo "README" para obter instruções). Às vezes, está incluído um script para instalá-lo nas pastas do sistema e também para todos os usuários do seu computador poderem usá-lo.

Por último, alguns programas têm seu próprio gerenciador de software, como o do cliente Steam e o cliente Desura (ambos são para comprar e jogar jogos das suas respectivas lojas).

Fonte: http://forums.linuxmint.com/viewtopic.php?f=90&t=97158
Traduzido por: http://translate.google.com.br/
Revisores de tradução: dougpess e Gui

