# Cloud-Native Fabric ERP & IoT Warehouse Monitor

A distributed ERP system for product management featuring a microservices architecture, cloud storage integration, and real-time IoT environmental monitoring.

> **University Project**
> **Course:** Cloud Platforms
> **Student:** Katsimpras Drosos

---

## Overview

This project demonstrates the transition from monolithic software to a **Cloud-Native Architecture**. It integrates a React-based ERP frontend with a Node.js backend, orchestrating data flows between Cloud Databases (MongoDB), Object Storage (MinIO), and IoT platforms (ThingsBoard) via an Event-Driven approach using RabbitMQ.

The system simulates a **Smart Warehouse** scenario: When a new product is added to the inventory, the system automatically triggers IoT sensors to monitor the environmental conditions (Temperature/Humidity) of the specific storage shelf.

## System Architecture

The application is deployed on a **MicroK8s Kubernetes Cluster** and consists of the following microservices:

| Service | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React.js | User Interface for inventory management. |
| **Backend** | Node.js / Express | REST API handling business logic and storage. |
| **Database** | MongoDB Atlas | Cloud-hosted NoSQL database for product metadata. |
| **Object Storage** | MinIO | Local S3-compatible storage for product images. |
| **Message Broker** | RabbitMQ | Handles asynchronous communication (AMQP). |
| **IoT Gateway** | Node-RED | Processes events and simulates sensor telemetry. |
| **Visualization** | ThingsBoard | Professional IoT Dashboard for real-time monitoring. |

---

## Key Features

* **Microservices Orchestration:** Fully containerized environment using Docker & Kubernetes.
* **Hybrid Storage Strategy:** Utilizes both Public Cloud (MongoDB Atlas) and Private Cloud (MinIO) storage solutions.
* **Event-Driven Architecture:** Decoupled communication between the ERP and IoT layers using RabbitMQ.
* **IoT Simulation:** Node-RED intercepts "New Product" events and generates simulated sensor data (Temperature & Humidity).
* **Real-Time Dashboard:** ThingsBoard visualizes the stock levels and environmental conditions via MQTT.

---

## Installation & Setup

### Prerequisites
* Ubuntu Linux (Native or VM)
* **MicroK8s** installed and running (addons enabled: `dns`, `storage`, `dashboard`).
* **Node.js** & **NPM**.

### 1. Clone the Repository
```bash
git clone https://github.com/drososkats/fabric_cloud.git
cd fabric_cloud
```
### 2. Deploy to Kubernetes 
```bash
microk8s kubectl apply -f kubernetes/
```

### 3. Verify Deployment
```bash
microk8s kubectl get pods
```
---

## Accessing the Application (Port Forwarding)

To access the services from your local machine (localhost), open separate terminals and run the following port-forwarding commands:

### 1. Backend API (Required for App Logic)
```bash
microk8s kubectl port-forward --address 0.0.0.0 service/fabric-backend-service 5000:5000
```


### 2. Node-RED (IoT Flow Editor)
```bash
microk8s kubectl port-forward --address 0.0.0.0 service/nodered-service 1880:1880
```
Access at: http://localhost:1880

### 3. ThingsBoard (IoT Dashboard)
```bash
microk8s kubectl port-forward --address 0.0.0.0 service/thingsboard-service 9090:9090
```
Access at: http://localhost:9090
(Note: The Frontend is accessible via NodePort at http://localhost:30002 or via port-forwarding depending on configuration).

---

## Useage Scenario (The "Smart Warehouse" Demo)

* Input: The user navigates to the Frontend and adds a new product (e.g., "Running Shoes").

* Storage: The Backend uploads the image to MinIO and saves metadata to MongoDB.

* Event Trigger: A NEW_PRODUCT message is published to the RabbitMQ queue.

* IoT Processing: Node-RED listens to the queue, receives the product data, and simulates sensor readings (e.g., 23°C, 45% Humidity).

* Visualization: The data is pushed via MQTT to ThingsBoard, where the gauges and charts update in real-time.

---

## Known Limitations & Future Work

* Ephemeral Storage: In the current implementation, MinIO uses ephemeral pod storage. Restarting the cluster resets the stored images. Future improvements will include Kubernetes Persistent Volume Claims (PVCs) for data persistence.

* Security: Service communication currently uses HTTP. Future iterations will implement HTTPS and ingress controllers.

---

## License
This project is created for educational purposes.