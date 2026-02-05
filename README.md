# Smart Warehouse Cloud Project 🚀

This repository contains the implementation of a distributed Warehouse Management System (ERP) leveraging Cloud-Native and IoT technologies.

## File Structure
All implementation files, source code, Dockerfiles, and Kubernetes manifests are organized within the following directory:

👉 **[my_files](./my_files)**

---

## Access Credentials (Accounts)
To test and evaluate the system, please use the following credentials:

* **MongoDB Atlas (DBaaS):** Connection is established via the connection string included in the Backend environment variables.
* **Fabric App:**
    * **URL:** `http://localhost:30002` 
    * **Email Address:** `drosos@fabric.com`
    * **Password:** `12345678`
* **RabbitMQ Management:**
    * **URL:** `http://localhost:15672` (or the respective NodePort)
    * **User:** `guest`
    * **Password:** `guest`
* **ThingsBoard (IoT Visualization):**
    * **URL:** `http://localhost:3003` (or the respective NodePort)
    * **Login:** `tenant@thingsboard.org`
    * **Password:** `tenant`
* **MinIO Object Storage:**
    * **URL:** `http://localhost:9001` (Console) / `http://localhost:9000` (API)
    * **Root User:** `admin`
    * **Root Password:** `password123`

---

## 🛠 Deployment Instructions
To deploy the entire infrastructure on a **MicroK8s** environment, navigate to the `my_files` directory and follow the local README or execute the automation script:

```bash
cd my_files/
chmod +x deploy_fabric.sh
./deploy_fabric.sh
