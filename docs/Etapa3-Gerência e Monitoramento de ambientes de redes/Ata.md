# 🌾 Ata de Desenvolvimento da Etapa 3 — Projeto Solo Forte
---
## 👩‍🌾 Atividades Individuais

| Nome do Integrante           | Atividades Realizadas                                              | Carga Horária |
|------------------------------|--------------------------------------------------------------------|----------------------------|
| Matheus Godinho Blaselbauer  | Configuração do Servidor Zabbix na AWS + Agentes FTP e PostgreSQL| 4 dias|
| Guilherme de Souza Mendonça Silva  | Instalação e configuração do agente Zabbix no servidor Ubuntu (DHCP) e integração via REede Interna com o cliente Windows. Habilitação do SNMP no Windows server e criação dos hosts na interface web do Zabbix| 12 horas|
| Yan GuimarãesMartins | Montagem do dashboard e dos gráficos no frontend do zabbix,seleção de templates, criação dewidgets efiltros, validaçãodas metricas de CPU, memória, rede e status doserviço DHCP,documentação das evidências |12 horas|
| Bruno Alfeu Mendes de Araújo | Instalação e configuração do Zabbix Agent na instância NFS e atualização do documento com evidências e explicações do monitoramento NFS. | 8 horas|
| Isaac Samuel de Carvalho | Configuração e conexão do meu cliente ao servidor Zabbix implementado na AWS. | 4 horas |
| Gabriel Amâncio de Oliveira | Integração e configuração do meu cliente ao servidor Zabbix implementado na AWS e suporte para os outros integrantes  | 10 horas |

## Detalhamento das atividades

**Matheus Godinho Blaselbauer**: Implementei o servidor Zabbix em uma instância EC2 da AWS e configurei as máquinas hospedando os serviços de FTP e banco de dados PostgreSQL para se conectarem via interface Agent, ou seja, como agentes Zabbix. Para isso, o pacote completo do Zabbix(Servidor+Frontend+Agent) para a versão Ubuntu 24.04 foi devidamente instalado e o firewall tanto no grupo de segurança do Console AWS como no terminal foi configurado para aceitar conexões na porta 10050, padrão para conexões por meio de agentes Zabbix. Posteriormente, instalei o pacote de agente tanto no host do banco de dados como no host FTP e alterei o arquivo de configuração para apontar ao IP do servidor Zabbix, permitir conexões na porta 10050 e alterar o hostname das máquinas. No caso da instância de banco de dados, foi efetuado no terminal o setup específico do template "PostgreSQL by Zabbix Agent" para a identificação dos comandos SQL necessários para rodar os testes de monitoramento necessários. Após isso, o IP elástico das máquinas cliente foram adicionados via interface Agent para estabelecer a conexão, que ocorreu com sucesso.



##

**Guilherme de Souza Mendonça Silva**:
Na terceira etapa do projeto, fui responsável pela implementação e configuração do sistema de monitoramento Zabbix no ambiente on-premise (VirtualBox), voltado para o gerenciamento dos serviços de DHCP configurados na etapa anterior. Minhas contribuições foram:

Implementação do Servidor Zabbix: Realizei a importação do Zabbix Appliance para o VirtualBox e configurei duas placas de rede para permitir o funcionamento adequado do sistema. A primeira interface foi configurada em modo Bridge, obtendo o endereço IP 192.168.1.250 da rede local para acesso à interface web. A segunda interface foi configurada em modo Rede Interna (intnet), com endereço IP estático 192.168.99.10.

Configuração dos Agentes de Monitoramento: Preparei ambos os hosts-alvo para coleta de dados pelo servidor Zabbix. No Servidor Ubuntu DHCP, instalei o pacote zabbix-agent e editei o arquivo de configuração para permitir conexões exclusivamente vindas do IP interno do servidor Zabbix (192.168.99.10). No Cliente Windows Server, habilitei o Protocolo SNMP (Simple Network Management Protocol) nativo do sistema operacional, criei a comunidade public com permissão de READ ONLY e configurei o serviço para aceitar requisições SNMP exclusivamente do IP interno do servidor Zabbix (192.168.99.10).

Configuração dos Hosts na Interface Web: Acessei a interface web do Zabbix através do endpoint /zabbix e realizei login com as credenciais padrão de administrador (usuário "Admin" e senha "zabbix"). Criei os hosts correspondentes ao servidor Ubuntu e ao cliente Windows Server, adicionando os hostnames conforme especificado nos arquivos de configuração dos agentes. Para o servidor Ubuntu, adicionei a interface "Agent" com o template "Linux by Zabbix agent". Para o cliente Windows, configurei a interface "SNMP" com as informações da comunidade criada anteriormente e apliquei o template apropriado para monitoramento via SNMP.

Colaboração e Suporte: Durante toda a etapa, trabalhei em estreita colaboração com o Yan, fornecendo suporte na compreensão da estrutura de dados coletados pelo Zabbix e auxiliando na identificação das métricas mais relevantes para compor o dashboard. Recebi também o apoio do Yan na validação dos templates aplicados e na definição dos períodos de coleta de dados para os gráficos.



##

**Yan Guimarães Martins**:
Na terceira etapa do projeto, fiquei responsável pela criação e customização do dashboard de monitoramento e dos gráficos de desempenho na interface web do Zabbix para o ambiente on-premise. Minhas contribuições foram:

Criação do Dashboard Personalizado: Acessei a aba "Dashboards" e "All Dashboards" na interface web do Zabbix e criei um novo dashboard personalizado para centralizar as informações mais relevantes do ambiente on-premise. Defini o usuário administrador Zabbix como proprietário do dashboard e organizei a estrutura visual para facilitar a análise em tempo real dos serviços monitorados.

Configuração de Widgets e Métricas: Adicionei diversos widgets ao dashboard através da opção "Add widget", selecionando e configurando os indicadores mais importantes para o projeto. Incluí widgets de disponibilidade dos hosts (servidor Ubuntu e cliente Windows), gráficos de uso de CPU e memória, tráfego de rede nas interfaces, e um widget específico para monitorar o status do processo DHCP, confirmando que o serviço estava ativo e em execução no servidor Ubuntu.

Colaboração e Suporte: Trabalhei em conjunto com o Guilherme durante toda a etapa, recebendo orientação sobre a estrutura de dados disponibilizados pelos agentes Zabbix e fornecendo feedback sobre a necessidade de métricas adicionais para compor visualizações mais completas. Auxiliei também na validação da comunicação entre o servidor Zabbix e os agentes instalados nos hosts monitorados.


##

**Isaac Samuel de Carvalho**

Na terceira etapa do projeto, participei do processo auxiliando na conexão do meu cliente ao servidor Zabbix configurado pelo Matheus. Após ele implementar o servidor Zabbix em uma instância EC2 na AWS, realizei a configuração necessária no meu host para que o agente Zabbix se comunicasse corretamente com o servidor. Ajustei o arquivo de configuração do agente, apontando para o IP do servidor Zabbix, habilitei a porta padrão (10050) e defini o hostname da máquina. Com isso, a conexão entre meu cliente e o servidor foi estabelecida com sucesso, permitindo o monitoramento adequado pelo Zabbix.

##

**Gabriel Amâncio de Oliveira**

Na terceira etapa do projeto, fiquei responsável pela integração da conexão do meu cliente ao servidor configurado pelo Matheus (Zabbix). Após a implementação do servidor Zabbix em uma instância EC2 na AWS, realizei a configuração necessária do meu host para que o agente Zabbix se comunicasse corretamente com o servidor.

Ajustei o arquivo de configuração do agente (`zabbix_agentd.conf`), apontando para o IP do servidor Zabbix, habilitei a porta padrão (10050) e defini o hostname da máquina. 
Com isso, a conexão entre meu cliente e o servidor foi estabelecida com sucesso, permitindo o monitoramento adequado pelo Zabbix.

Em seguida, configurei a interface web do Zabbix, cadastrando o host e aplicando templates de monitoramento para CPU, memória, disco e rede. 
Também realizei a criação de gráficos e triggers para acompanhar o desempenho do sistema em tempo real. 

Por fim, realizei **testes de estresse** no servidor utilizando o comando `ab -n 10000 -c 100 http://seu-servidor/` para gerar carga e analisar o comportamento do sistema. Esses testes permitiram avaliar a estabilidade do ambiente, validar as métricas coletadas e confirmar o funcionamento do monitoramento via Zabbix e AWS.

##

**Bruno Alfeu Mendes de Araújo**:

Na terceira etapa do projeto, fiquei responsável pela integração e monitoramento de um servidor de arquivos NFS, conectando-o ao servidor Zabbix central (configurado pelo Matheus).

Após a implementação do servidor Zabbix em uma instância EC2 na AWS, realizei a configuração necessária no meu host (servidor NFS) para que o agente Zabbix se comunicasse corretamente com o servidor. Ajustei o arquivo de configuração do agente (zabbix_agentd.conf), apontando para o IP do servidor Zabbix, habilitei a porta padrão (10050) e defini o hostname da máquina. Com isso, a conexão entre meu cliente e o servidor foi estabelecida com sucesso.

Em seguida, configurei a interface web do Zabbix, cadastrando o host e aplicando os templates de monitoramento, com foco especial em "Linux by Zabbix agent" para monitorar CPU, memória e, crucialmente, o sistema de arquivos (disco). Criei gráficos específicos e triggers para o ponto de montagem NFS (/srv/shared_dir/), visando disparar alertas em caso de alta utilização de espaço.

Por fim, realizei testes de estresse de disco para validar os triggers de monitoramento. Utilizei o comando sudo fallocate -l 900M /srv/shared_dir/arquivo_teste_900mb.img para criar um arquivo de 900MB, simulando um cenário de "disco quase cheio" (já que a máquina possuía 1GB). O teste foi bem-sucedido, fazendo com que o Zabbix gerasse o alerta de falta de espaço conforme configurado.

Posteriormente, o comando sudo rm /srv/shared_dir/arquivo_teste_900mb.img foi executado para liberar o espaço. Isso permitiu validar também o "trigger" de recuperação no Zabbix, confirmando o ciclo completo de detecção e resolução do problema. Esses testes validaram a eficácia do monitoramento do sistema de arquivos NFS via Zabbix.

---
## Colaboração entre integrantes

- Guilherme auxiliou Yan na definição dos templates, no mapeamento das interfaces dos hosts e na validação de conectividade (agent/SNMP).
- Yan auxiliou Guilherme na criação dos hosts no frontend, na configuração dos itens/trigger para o processo DHCP e na checagem dos “Latest data”.
---
