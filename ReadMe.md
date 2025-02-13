# Calculator

A cloud-native application that performs basic mathematical operations, designed as part of the Virtualisation & Cloud Computing module at Polytech Dijon. It demonstrates cloud-native architecture, containerization, and infrastructure as code principles.

## Table of Contents
- [Overview](#overview)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributors](#contributors)

## Overview

The **Calculator** allows users to perform basic calculations such as:
- Addition
- Subtraction
- Multiplication
- Division

The application is designed with cloud-native principles:
- **Containerization** for portability
- **Microservices Architecture** for scalability
- **Infrastructure as Code** for reproducibility

## Architecture

The application follows a microservices architecture with the following components:
- **Frontend**: User interface for inputting calculations and viewing results.
- **Backend (API)**: Handles calculation requests and retrieves results.
- **Message Broker**: Manages asynchronous calculation tasks.
- **Consumer**: Processes calculations and stores the results.
- **Database/Cache**: Stores and retrieves calculation results.

## Tech Stack

- **Frontend**: React
- **Backend (API)**: Flask
- **Message Broker**: RabbitMQ
- **Cache/Database**: Redis
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Infrastructure as Code (IaC)**: Terraform

## Features

- Perform basic arithmetic operations: Addition, Subtraction, Multiplication, Division
- Asynchronous processing of calculations
- Scalable microservices architecture
- Stateless frontend with dynamic API communication
- In-memory caching for fast result retrieval

## Setup and Installation

### Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Kubernetes](https://kubernetes.io/docs/tasks/tools/)
- [Terraform](https://developer.hashicorp.com/terraform/downloads)

### Installation Steps

1. **Clone the Repository**  
    ```bash
    git clone https://github.com/ewanvidal/virtualisation-cloud-computing.git
    ```
2. **Deployment**
    
    After cloning the repository, the only command to run is this one to build, push etc...
    ```bash
    make start-project
    ```

## Usage

### Accessing the Application
- Open a browser and navigate to the provided URL after deployment :

    [The website](http://calculatrice-vidal-guillot-polytech-dijon.kiowy.net/)

## Contributors

- `Natthan GUILLOT`
- `Ewan VIDAL`
