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
git clone [https://github.com/katsdros/fabric_cloud.git](https://github.com/katsdros/fabric_cloud.git)
cd fabric_cloud

### 2. Deploy to Kubernetes 
```bash
microk8s kubectl apply -f kubernetes/

### Verify Deployment
```bash
microk8s kubectl get pods

## Accessing the Application (Port Forwarding)