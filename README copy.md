# Digital Factory - Sistema IIoT Completo

Sistema completo de fábrica digital com simulação IIoT, backend .NET, frontend React e visualização em tempo real.

## 🏗️ Arquitetura do Sistema

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Factory.Api   │    │  PostgreSQL     │
│   React/Vite    │◄──►│   (.NET 9)      │◄──►│  TimescaleDB    │
│   Port: 3000    │    │   Port: 5133    │    │   Port: 5432    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         ▲                       ▲                       ▲
         │              ┌─────────────────┐              │
         └─────────────►│  Factory.Ingest │◄─────────────┘
                        │   (.NET 9)      │
                        └─────────────────┘
                                 ▲
                                 │ MQTT
                        ┌─────────────────┐
                        │   Mosquitto     │
                        │   Port: 1883    │
                        └─────────────────┘
                                 ▲
                   ┌─────────────┼─────────────┐
                   │             │             │
        ┌─────────────────┐ ┌─────────────┐ ┌─────────────┐
        │ Production Line │ │     ...     │ │ Utilities   │
        │ Simulators      │ │   Lines     │ │ Plant       │
        │ (7 lines)       │ │   2-6       │ │ (Line 7)    │
        └─────────────────┘ └─────────────┘ └─────────────┘
```

## 🚀 Como Executar

### Pré-requisitos
- Docker & Docker Compose
- .NET 9.0 SDK (para desenvolvimento local)
- Node.js 18+ (para desenvolvimento local)

### Execução Completa com Docker

1. **Clone o repositório:**
```bash
git clone <repo-url>
cd digital-factory
```

2. **Execute todo o sistema:**
```bash
docker-compose up -d
```

3. **Acesse as aplicações:**
- **Frontend:** http://localhost:3000
- **API:** http://localhost:5133
- **Swagger:** http://localhost:5133/swagger
- **PostgreSQL:** localhost:5432
- **MQTT Broker:** localhost:1883

### Serviços Incluídos

#### 🗄️ Database
- **PostgreSQL + TimescaleDB:** Banco de dados otimizado para séries temporais
- **Auto-initialization:** Scripts SQL executados automaticamente

#### 🌐 Backend
- **Factory.Api:** API REST para consulta de dados
- **Factory.Ingest:** Serviço de ingestão MQTT → PostgreSQL

#### 🖥️ Frontend
- **React + TypeScript:** Dashboard em tempo real
- **WebSocket:** Atualizações automáticas
- **TailwindCSS + Shadcn/ui:** Interface moderna

#### 📡 IIoT Simulators
- **Line 1 (PRESS-LINE-1):** Linhas de prensa com sensores de pressão, temperatura e vibração
- **Line 2 (WELDING-LINE-2):** Estações de solda com monitoramento de corrente, voltagem e fluxo de gás
- **Line 3 (CNC-LINE-3):** Máquinas CNC com controle de velocidade do spindle, desgaste de ferramenta
- **Line 4 (ASSEMBLY-LINE-4):** Linha de montagem com robôs, esteiras e controle de qualidade
- **Line 5 (PAINT-LINE-5):** Cabine de pintura com sensores ambientais e controle de fluxo
- **Line 6 (PACKAGING-LINE-6):** Linha de embalagem com pesagem e controle de velocidade
- **Line 7 (UTILITIES-PLANT-7):** Utilidades da fábrica (HVAC, compressores, caldeiras)

## 📊 Tipos de Sensores Simulados

### Sensores Industriais Básicos
- **Temperature:** Temperatura de motores, mancais, fluido refrigerante
- **Pressure:** Pressão pneumática, hidráulica, vapor
- **Flow:** Fluxo de líquidos, gases, vapor
- **Vibration:** Análise FFT, RMS de vibração
- **Power:** Potência, tensão, corrente, fator de potência
- **Position:** Coordenadas X,Y,Z, ângulos
- **Level:** Nível de tanques, percentual de enchimento
- **Speed:** RPM, velocidade linear
- **Air Quality:** PM2.5, CO2, umidade

### Sensores Específicos de Máquinas
- **CNC Machine:** Velocidade spindle, taxa de avanço, desgaste de ferramenta
- **Welding Station:** Corrente de solda, voltagem, velocidade do arame
- **Conveyor Belt:** Velocidade da esteira, peso da carga
- **Robot Arm:** Ciclos completados, precisão, peso da carga
- **HVAC System:** Fluxo de ar, pressão do filtro

## 🔧 Desenvolvimento Local

### Backend (.NET)
```bash
cd backend
dotnet restore
dotnet run --project Factory.Api
dotnet run --project Factory.Ingest
```

### Frontend (React)
```bash
cd frontend
npm install
npm run dev
```

### IIoT Simulator
```bash
cd IIoT-simulator
docker-compose up -d
```

## 📈 Monitoramento

### Métricas Disponíveis
- **Produção:** Peças produzidas, tempo de ciclo, OEE
- **Qualidade:** Taxa de defeitos, tipos de defeitos
- **Eficiência Energética:** Consumo por linha, fator de potência
- **Manutenção:** Vibração, temperatura, desgaste de ferramentas
- **Ambiente:** Qualidade do ar, temperatura ambiente

### Endpoints da API
- `GET /api/health` - Status do sistema
- `GET /api/lines` - Lista de linhas de produção
- `GET /api/metrics/{lineId}` - Métricas atuais de uma linha
- `GET /api/timeseries/{lineId}/{sensorId}` - Dados históricos
- `GET /api/alerts` - Alertas ativos
- `GET /api/summary` - Resumo geral da fábrica

## 🐳 Docker Services

| Service | Container | Port | Description |
|---------|-----------|------|-------------|
| postgres | factory_postgres | 5432 | PostgreSQL + TimescaleDB |
| mosquitto | factory_mosquitto | 1883 | MQTT Broker |
| factory_api | factory_api | 5133 | .NET API |
| factory_ingest | factory_ingest | - | MQTT Ingest Service |
| frontend | factory_frontend | 3000 | React Dashboard |
| control_center | factory_control_center | - | IIoT Control |
| production_line_1-6 | factory_*_line_* | - | Production Simulators |
| utilities_plant | factory_utilities_plant_7 | - | Utilities Simulator |

## 🛠️ Logs e Troubleshooting

### Visualizar logs:
```bash
# Todos os serviços
docker-compose logs -f

# Serviço específico
docker-compose logs -f factory_api
docker-compose logs -f factory_ingest
docker-compose logs -f production_line_1
```

### Resetar dados:
```bash
# Parar e remover volumes
docker-compose down -v

# Rebuild e restart
docker-compose up --build -d
```

### Verificar conectividade MQTT:
```bash
# Conectar ao container mosquitto
docker exec -it factory_mosquitto sh

# Testar publicação/subscrição
mosquitto_pub -h localhost -t factory/test -m "hello"
mosquitto_sub -h localhost -t factory/#
```

## 📝 Licença

Este projeto foi desenvolvido para demonstração de conceitos IIoT e Indústria 4.0.