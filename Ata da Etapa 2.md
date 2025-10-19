# 🌾 Ata de Desenvolvimento — Projeto Solo Forte

---

## 👩‍🌾 Atividades Individuais

| Nome do Integrante           | Atividades Realizadas                                              | Carga Horária |
|------------------------------|--------------------------------------------------------------------|----------------------------|
| Matheus Godinho Blaselbauer  | Implementação do FTP e Banco de Dados no ambiente da AWS           | 15h                        |
| Gabriel Amâncio de Oliveira  | Implementação do HTTP no ambiente da AWS                           | 12h                        |
| Bruno Alfeu Mendes de Araújo | Implementação do NFS no ambiente da AWS                            | 9h                         |
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


**Yan Guimarães Martins**

Na segunda etapa do projeto, fiquei responsável por fazer a configuração AD e GPO por meio da virtualbox, utilizando o sistema operacional Windows.
* **Configuração do Ambiente:** O ambiente de virtualização foi preparado para receber  o sistema operacional Windows.
* **Configuração do Ambiente:** Realizei a instalação do CentOS e o sistema operacional do windows baixado do site da Microsoft, após isso segui os passos para as configurações do AD e GPO contidos na documentação modificando para o adequamento ao projeto solo forte
* **Documentação e Apresentação:** Fui responsável por documentar o passo a passo do processo da criação do AD e GPO, além de participar de todas as discussões do grupo e fornecer e solicitar apoio quando necessário na equipe.
