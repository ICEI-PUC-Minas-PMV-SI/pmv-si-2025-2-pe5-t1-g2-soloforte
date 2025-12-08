# ATA DE REGISTRO DE ATIVIDADES – PROJETO SEMESTRAL

**Integrante:** Guilherme de Souza Mendonça Silva

---

## Etapa 1 – Configuração de redes de Wi-Fi no Cisco Packet Tracer  
**Carga horária:** 12 horas  

Atuei na configuração das redes wireless no simulador Cisco Packet Tracer, definindo parâmetros de segurança e desempenho. Realizei a gestão e divisão das tarefas entre os membros da equipe, estruturando o plano de implementação e assegurando que cada integrante tivesse clareza das suas funções para a continuidade do projeto.

---

## Etapa 2 – Configuração do DHCP em ambiente on-premise (VirtualBox)  
**Carga horária:** 15 horas  

Fui responsável pela implementação do serviço DHCP no Ubuntu Server, com cliente Windows Server para testes, utilizando rede interna:  
- Instalação e configuração do **isc-dhcp-server**.  
- Definição de IP estático, escopo de distribuição (192.168.99.51–192.168.99.100), gateway e DNS.  
- Testes de recebimento automático de IP no cliente.  
- Documentação passo a passo com capturas de tela.  
- Gravação da parte correspondente no vídeo de apresentação da equipe.

---

## Etapa 3 – Implementação do monitoramento Zabbix e integração SNMP  
**Carga horária:** 12 horas  

Instalei e configurei o servidor Zabbix no VirtualBox:  
- Interfaces em modo **Bridge** e **Rede Interna** para comunicação.  
- Configuração de agentes Zabbix no servidor Ubuntu (DHCP) e habilitação do SNMP no Windows Server com comunidade **public** (READ ONLY).  
- Criação e associação de templates adequados aos hosts via interface web do Zabbix.  
- Apoio ao colega de equipe na interpretação de métricas e configuração de períodos de coleta para dashboards.

---

## Etapa 4 – Elaboração de cartilha de boas práticas baseada na PSI  
**Carga horária:** 8 horas  

Produzi a cartilha de boas práticas de segurança para funcionários em laboratórios e instalações, com base na Política de Segurança da Informação da empresa:  
- Adequação à identidade visual da Solo Forte (paleta de cores e elementos visuais).  
- Criação de ilustrações referenciais para facilitar identificação de seções pelos usuários.  
- Conteúdo adaptado ao público interno, com linguagem acessível e orientações claras.

---

## Etapa 5 – Preparação e apresentação final, revisão documental  
**Carga horária:** 10 horas  

Trabalhei na organização da apresentação final:  
- Estruturação dos slides e sequência de tópicos.  
- Seleção de elementos visuais representando as etapas do projeto.  
- Participação ativa na apresentação, explicando partes técnicas relacionadas à infraestrutura de rede e segurança.  
- Revisão final de artigos e documentos produzidos ao longo do semestre, corrigindo inconsistências técnicas, terminologia e garantindo presença de todas as evidências de execução.

---

## Resumo Final  
Durante o semestre, atuei em todas as etapas do projeto, desde as configurações iniciais de rede e serviços, passando pela implementação de monitoramentos, elaboração de materiais de boas práticas e finalizando com apoio direto na apresentação e revisão completa da documentação. Meu trabalho contribuiu para a execução técnica, organização interna e entrega final detalhada e estruturada dos resultados da equipe.



---

**Integrante:** Matheus Godinho Blaselbauer

## Etapa 1 – Ajuda com a Arquitetura do Cisco Packet Tracer e Roteamento RIP
**Carga horária:** 20 horas  

Visei auxiliar na constituição de uma arquitetura de rede por meio do software simulador Cisco Packet Tracer e configurar o roteamento de saída da WAN. A topologia escolhida foi a de barramento. Para a configuração da WAN, foi implementado o protocolo de rede RIP na versão 2 em cada filial.

---

## Etapa 2 – Implementação do FTP e Banco de Dados no ambiente da AWS
**Carga horária:** 15 horas  

Me responsabilizei por implementar um serviço de rede para o upload remoto de arquivos por meio do host local, no ambiente em nuvem AWS. Isso foi feito pelo protocolo de rede FTP. Para a configuração de um banco de dados, utilizei um SGBD local em uma máquina EC2, em dialeto PostgreSQL. Ambos os serviços foram testados e validados corretamente através de hosts clientes localizados também na nuvem.

---

## Etapa 3 – Configuração do Servidor Zabbix na AWS + Agentes FTP e PostgreSQL
**Carga horária:** 4 dias

Criei uma instância em nuvem para funcionar como servidor de monitoramento Zabbix e monitorar conexão via interface Agent com os serviços de rede configurados na AWS. Utilizei templates específicos e próprios para as seguintes instâncias: **Banco de Dados** e **Servidor Web Apache**.

---

## Etapa 4 – Estruturação dos tópicos da PSI , deploy do CRUD e montagem da análise de vulnerabilidades 
**Carga horária:** 50 horas  

Analisei a estruturação da PSI ou Políticas de Segurança de Informação como um todo e dividi os tópicos para a construção conforme as necessidades da Solo Forte Agropecuária. Gerenciei a disponibilização do CRUD desenvolvido para subir a aplicação para produção e prontificá-la para uso concreto.

---

## Etapa 5 – Documentação inicial, explicação geral da Etapa 2 e dificuldades encontradas + ajuste geral do design
**Carga horária:** 10 horas  

Disponibilizei o template inicial dos slides para a apresentação do projeto. Elaborei as partes para apresentação sobre o contexto da etapa 2 e as principais dificuldades encontradas ao longo do semestre.

---

## Resumo Final  
No período de desenvolvimento do projeto atuei principalmente nos confins mais técnicos de documentação e no gerenciamento do ambiente em nuvem. Na etapa 1 os problemas encontrados foram maiores e não foi possível solucionar os problemas encontrados para a configurabilidade e funcionamento da WAN.



---

**Integrante:** Isaac Samuel de Carvalho  

## Etapa 1 – Arquitetura e configuração da topologia no Cisco Packet Tracer  
**Carga horária:** 30 horas  

Contribuí na definição da arquitetura da rede simulada no Cisco Packet Tracer, estruturando a topologia e organizando os dispositivos necessários para o projeto. Auxiliei na configuração inicial dos equipamentos, incluindo pontos de acesso e roteadores, garantindo coerência entre os requisitos do projeto e a divisão de responsabilidades entre os membros da equipe.

---

## Etapa 2 – Configuração de DNS utilizando Bind9 em ambiente AWS  
**Carga horária:** 4 dias  

Fui responsável pela implementação do serviço DNS utilizando **Bind9** em uma instância AWS, realizando todas as etapas de instalação, configuração e testes:  
- Configuração de zonas direta e reversa.  
- Ajuste de registros A, CNAME e PTR conforme necessidades do ambiente.  
- Integração do DNS com outros serviços configurados pela equipe.  
- Validação do funcionamento do serviço e documentação completa do processo.  
- Suporte aos colegas durante os testes de resolução de nomes.

---

## Etapa 3 – Suporte à implementação do Zabbix e integração em ambiente AWS  
**Carga horária:** 12 horas  

Apoiei a equipe na configuração do Zabbix hospedado na AWS:  
- Auxílio na instalação do Zabbix Server e dependências.  
- Configuração de agentes em servidores Linux.  
- Ajustes de comunicação entre instâncias para garantir o monitoramento adequado.  
- Suporte na criação e vinculação de templates para hosts, auxiliando na leitura das métricas e organização das coletas.

---

## Etapa 4 – Desenvolvimento de funcionalidades e apoio geral ao time  
**Carga horária:** 20 horas  

Contribuí para o desenvolvimento da parte do CRUD relacionado ao projeto, além de auxiliar colegas em diversas atividades paralelas:  
- Implementação de funcionalidades complementares solicitadas pela equipe.  
- Acompanhamento de testes e correções pontuais.  
- Suporte técnico aos membros durante a execução das tarefas individuais.

---

## Etapa 5 – Preparação da apresentação final e design dos slides  
**Carga horária:** 10 horas  

Atuei diretamente na construção da apresentação final do projeto:  
- Criação e organização dos slides com foco visual e estruturado.  
- Definição do design, paleta de cores e elementos gráficos utilizados.  
- Apoio aos colegas na preparação dos conteúdos apresentados.  
- Participação ativa na apresentação, contextualizando pontos técnicos desenvolvidos ao longo do semestre.

---

## Resumo Final  
Durante o semestre, desempenhei papel ativo em todas as fases do projeto, desde o planejamento da arquitetura em simuladores, passando pela configuração de serviços essenciais como DNS e monitoramento, até o desenvolvimento de funcionalidades e apoio direto na apresentação final. Minha atuação contribuiu para o avanço técnico do projeto, suporte contínuo à equipe e entrega de um resultado consistente, bem documentado e visualmente organizado.


---
Integrante: Bruno Alfeu Mendes de Araújo

## Etapa 1 – Desenho da Arquitetura de Rede e Planilha de Equipamentos
**Carga horária:** 20 horas

Objetivo e Topologia: Na etapa inicial, responsabilizei-me pelo desenho da arquitetura de rede da empresa utilizando o simulador Cisco Packet Tracer. Desenhei a topologia de barramento para a estrutura da "Solo Forte", definindo como as LANs, servidores e dispositivos seriam interconectados.

Levantamento de Ativos: Com base na arquitetura simulada, realizei o levantamento detalhado e o preenchimento da planilha de equipamentos. Especifiquei os modelos de roteadores, switches, access points e o tipo de cabeamento necessários para a implementação física do projeto.

---
## Etapa 2 – Implementação do NFS na AWS (Ubuntu)
**Carga horária:** 12 horas

Fiquei responsável pela configuração do sistema de arquivos em rede (NFS) utilizando uma instância EC2 na AWS com Ubuntu.

- Configuração do Servidor: Realizei a instalação dos pacotes necessários e defini os diretórios de compartilhamento (exports) e permissões de acesso. Configurei também os Security Groups na AWS para liberar as portas necessárias para o serviço.

- Integração: Realizei as modificações necessárias para adequar o servidor ao projeto, garantindo que os compartilhamentos estivessem acessíveis para as outras instâncias do ambiente.

- Documentação: Documentei o passo a passo de todo o processo de configuração na nuvem, além de participar das discussões de grupo para alinhamento técnico.

---
## Etapa 3 – Integração e Monitoramento do NFS com Zabbix
**Carga horária:** 8 horas

Nesta etapa, integrei o servidor NFS ao monitoramento central (Zabbix Server).

- Configuração do Agente: Ajustei o arquivo zabbix_agentd.conf no meu host, apontando para o IP do servidor Zabbix e habilitando a porta 10050.

- Templates e Triggers: Na interface web do Zabbix, apliquei o template "Linux by Zabbix agent" com foco no sistema de arquivos. Criei gráficos e triggers específicos para o ponto de montagem NFS (/srv/shared_dir) para alertar sobre alta utilização de disco.

- Testes de Estresse: Validei o monitoramento criando um arquivo de 900MB (comando fallocate) para simular disco cheio. O teste foi bem-sucedido, gerando o alerta configurado. Posteriormente, removi o arquivo para validar o trigger de recuperação, fechando o ciclo de detecção.

---
## Etapa 4 – Documentação da PSI e Revisão Final
**Carga horária:** 35 horas

Revisão e Escrita: Atuei diretamente na documentação da Política de Segurança da Informação (PSI). Realizei uma revisão abrangente das etapas anteriores do projeto, corrigindo inconsistências e redigindo o conteúdo referente ao desenvolvimento desta fase, garantindo que todo o material estivesse atualizado e organizado.

---
## Etapa 5 – Preparação e Apresentação Final
Carga horária: 8 horas

Na fase final, concentrei-me na consolidação do material para a entrega e defesa do projeto.

-Slides: Fui responsável por montar os slides referentes à Etapa 3, estruturando as evidências técnicas e resultados da integração do NFS com o Zabbix.

-Apresentação: Realizei a apresentação oral deste tópico, demonstrando o funcionamento dos alertas e a configuração realizada.

## Resumo Final
Minha participação focou na estruturação da topologia de rede e no levantamento de hardware na fase inicial. Posteriormente, liderei a implementação e integração de serviços em nuvem (NFS na AWS), garantindo não apenas a configuração funcional, mas também o monitoramento proativo via Zabbix com testes práticos de validação. Finalizei contribuindo significativamente para a consistência da documentação técnica (PSI) e a apresentação dos resultados.

---

**Integrante:** Yan Guimarães Martins

---

## Etapa 1 – Planejamento da Arquitetura de Rede e Planilha de Equipamentos
**Carga horária:** 20 horas  

Atuei junto com o Bruno  para o planejamento e montagem da arquitetura de rede e da planilha de equipamentos

---

## Etapa 2 – Configuração da Politica de grupos em ambiente on-premise (VirtualBox)  
**Carga horária:** 12 horas  

Fui responsável pelo controle de usuários por meio de permissões de acesso.
---

## Etapa 3 – Monitoramento Zabbix e integração SNMP  
**Carga horária:** 12 horas  

Trabalhei junto com o Guilherme no monitoramento Zabbix utilizando os dados dos nossos testes para montar o dashboard mostrando como o servidor estava sendo utilizado.

---

## Etapa 4 – Suporte na configuração do Back-end
---
Não consegui ajudar o grupo nessa etapa de forma siguinificativa por problemas pessoais

## Etapa 5 – Preparação e apresentação sobre a PSI

---
Fiquei responsável por apresentar  os metodos de segurança e a CRUD da nossa aplicação.

 ## Resumo Final  
Durante o semestre  minha ajuda ao grupo foi bem fluída onde aprendi diversas partes da estrutura de rede, métodos de segurança, e monitoramento de sistema controlado, além disso o trabalho em equipe e divisões de tarefas contribuiram para uma melhor experiência pro mercado de trabalho.
