# 🌾 Ata de Desenvolvimento da Etapa 2 — Projeto Solo Forte

---

## 👩‍🌾 Atividades Individuais

| Nome do Integrante           | Atividades Realizadas                                              | Carga Horária |
|------------------------------|--------------------------------------------------------------------|----------------------------|
| Matheus Godinho Blaselbauer  | Implementação do FTP e Banco de Dados no ambiente da AWS           | 15h                        |
| Gabriel Amâncio de Oliveira  | Implementação do HTTP no ambiente da AWS                           | 12h                        |
| Bruno Alfeu Mendes de Araújo | Implementação do NFS no ambiente da AWS                            | 12h                         |
| Isaac Samuel de Carvalho     | Configuração do DNS do servidor                                    | 3 dias                     |
| Yan Guimarães Martins        | Configuração do AD e GPO                                           | 12 h                       |
| Guilherme de Souza Mendonça  | Configuração do DHCP no ambiente on-premise                        | 15 h                       |

---

## Detalhamento das atividades

**Guilherme de Souza Mendonça Silva**

Na segunda etapa do projeto, fui responsável pela implementação e configuração do serviço de DHCP (Dynamic Host Configuration Protocol) no ambiente on-premise, utilizando máquinas virtuais no VirtualBox. Minhas contribuições foram:

*   **Configuração do Ambiente:** Preparei o ambiente de virtualização, consistindo em um servidor Ubuntu Server (para hospedar o serviço DHCP) e um cliente Windows Server (para testes), garantindo que ambos estivessem na mesma "Rede Interna" para comunicação.
*   **Configuração do Servidor DHCP:** Realizei a instalação do pacote `isc-dhcp-server` no Ubuntu. Configurei o endereço IP estático da interface de rede do servidor (`192.168.99.1`) e defini o escopo de IPs a serem distribuídos para os clientes (faixa de `192.168.99.51` a `192.168.99.100`), incluindo as configurações de gateway e DNS.
*   **Testes e Validação:** Configurei a máquina cliente Windows para receber um endereço IP automaticamente e realizei testes com o comando `ipconfig /all` para validar que o servidor estava distribuindo os endereços corretamente, confirmando o sucesso da implementação.
*   **Documentação e Apresentação:** Fui responsável por documentar todo o passo a passo da configuração do DHCP para o artigo final do projeto, incluindo a captura de todas as telas de evidência, e gravei a seção correspondente do vídeo de apresentação da equipe.

##
**Yan Guimarães Martins**

Na segunda etapa do projeto, fiquei responsável por fazer a configuração AD e GPO por meio da virtualbox, utilizando o sistema operacional Windows.
* **Configuração do Ambiente:** O ambiente de virtualização foi preparado para receber  o sistema operacional Windows.
* **Configuração do Ambiente:** Realizei a instalação do CentOS e o sistema operacional do windows baixado do site da Microsoft, após isso segui os passos para as configurações do AD e GPO contidos na documentação modificando para o adequamento ao projeto solo forte
* **Documentação e Apresentação:** Fui responsável por documentar o passo a passo do processo da criação do AD e GPO, além de participar de todas as discussões do grupo e fornecer e solicitar apoio quando necessário na equipe.

##
**Matheus Godinho Blaselbauer**

Na segunda etapa do projeto, me responsabilizei por configurar os seguinte serviços no ambiente cloud AWS(Amazon Web Services): Banco de Dados e FTP(File Transfer Protocol). 
* **Instãncias**:
* Banco De Dados: A configuração do banco de dados foi feita localmente, ou seja, utilizando uma máquina virtual EC2 para hospedar um banco com dialeto PostgreSQL. Foi criada uma máquina virtual EC2 cliente na mesma rede virtual privada que o servidor hospedando o banco de dados. Foram utilizados tanto o terminal da instância cliente como o software pgAdmin como clientes para estabelecer a conexão.
* FTP: Foi criada uma instância EC2 para configurar o servidor FTP e utilizados tanto o terminal da instância do servidor como o software Filezilla para servirem como clientes para estabelecer a conexão.

* **Firewall**:
* Banco de Dados: Foi-se utilizada porta 5432 como porta padrão para estabelecer a conexão com o banco de dados. O firewall do terminal da instância e do Console AWS foram configurados para permitir a conexão com a porta mencionada.
* FTP: Foram utilizadas as portas no intervalo 20 a 21 para configurar a conexão com o servidor FTP. O firewall do terminal da instância e do Console AWS foram configurados para permitir a conexão com as portas mencionadas. Além disso, foram configuradas as portas no intervalo de 12000-12100 nos ambientes para assegurar a configuração correta do firewall com o FTP.

* **Testes**:
* Banco de Dados: O terminal da máquina cliente foi testado para apontar para o IP privado servidor e testar a conexão com o banco de dados através do cliente psql. O software pgAdmin foi utilizado apontando para o IP público do servidor. Ambas as conexões ocorreram com êxito.
* FTP: O terminal da própria instância do servidor foi utilizada "@localhost" para verificar a conexão com o serviço de ftp. O software Filezilla foi utilizado para estabelecer uma conexão no modo ativo com servidor da AWS através do IP público da instância e as credenciais de usuário. Ambas as conexões ocorreram com êxito.

##
**Gabriel Amâncio de Oliveira**

Na segunda etapa do projeto, fui responsável pela implementação e configuração do protocolo HTTP (Hypertext Transfer Protocol) no ambiente cloud AWS(Amazon Web Services). Minhas contribuições foram:

*   **Configuração da Instância:** Realizei a configuração e criação da EC2 e logo em seguida crie um instância. Usei uma máquina virtual para realizar toda configuração do protocolo HTTP.
*   **Configuração do protocolo HTTP:** Realizei a instalação do apache2 e atualização firewall com os comandos `sudo apt-get update` e `sudo apt-get install apache2`. Toda configuração foi realziada na VM da instância criada na AWS.
*   **Testes e Validação:** Para saber se estava tudo configurado, acessei o IP da minha instância e conseguir vizualizar a pagina padrão do Apache. Logo em seguida criei um pasta `meuSite` dentro do pasta `/var/www/html` e por lá criei o arquivo `index.html` com um código simples para representar uma breve comunicação com o servidor, onde conseguir acessar a página pelo http `http://34.234.96.85/meuSite/`.
*   **Documentação e Apresentação:** Fui responsável por documentar todo o passo a passo da configuração do HTTP para o artigo final do projeto, incluindo a captura de todas as telas de evidência, e gravei a seção correspondente do vídeo de apresentação da equipe.
##
**Bruno Alfeu Mendes de Araújo**

Na segunda etapa do projeto, fiquei responsável por implementar a configuração do NFS (Network File System) utilizando uma instância EC2 da AWS, com o sistema operacional Ubuntu.

*    Configuração do Servidor NFS: Realizei a instalação e configuração dos pacotes necessários para o serviço NFS na instância EC2 (Ubuntu). Isso incluiu a definição         dos diretórios que seriam compartilhados na rede (exports) e a configuração das permissões de acesso (incluindo a configuração de Security Groups na AWS para             liberar as portas do NFS).

*    Integração e Adequação: Segui os passos para a configuração do servidor NFS, realizando as modificações necessárias para o adequamento ao projeto solo forte,             garantindo que os compartilhamentos de arquivos estivessem acessíveis para as outras instâncias no ambiente do projeto.

*    Documentação e Apresentação: Fui responsável por documentar o passo a passo do processo de configuração do NFS na AWS, além de participar de todas as discussões do       grupo e fornecer e solicitar apoio quando necessário na equipe.

##
**Isaac Samuel de Carvalho**

Na segunda etapa do projeto, fui responsável pela implementação e configuração do serviço de DNS (Domain Name System) em instâncias da AWS, utilizando o BIND9 em ambiente Ubuntu Server. Minhas contribuições foram:

* Configuração do Servidor DNS: Realizei a instalação e configuração do serviço BIND9, criando as zonas direta e reversa para o domínio soloforteagro.teste, permitindo a tradução de nomes de domínio para endereços IP e vice-versa.

* Ajustes de Rede e Segurança: Configurei o endereço IP privado da instância como servidor de nomes e ajustei as regras de entrada no grupo de segurança da AWS para permitir o tráfego nas portas 53 (UDP/TCP), garantindo a comunicação entre servidor e clientes.

* Configuração do Cliente DNS: Criei uma segunda instância Ubuntu na mesma VPC para atuar como cliente, ajustando o arquivo /etc/resolv.conf para apontar para o servidor DNS.

* Testes e Validação: Utilizei o comando dig para realizar consultas diretas e reversas, confirmando que o servidor DNS estava resolvendo corretamente os nomes e endereços IP.

* Documentação e Apresentação: Fui responsável por documentar todo o processo de configuração e validação do DNS, registrando evidências e preparando o material para o vídeo de apresentação da equipe.
