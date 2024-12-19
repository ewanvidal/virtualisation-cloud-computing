terraform {
  required_providers {
    scaleway = {
      source  = "scaleway/scaleway"
      version = "2.47.0"
    }
  }
}
provider "scaleway" {}
################################################################################################
# Container registry                                                                           #
################################################################################################

resource "scaleway_registry_namespace" "container_registry" {
  name        = "container_registry"
  description = "Main container registry"
  is_public   = false
}
################################################################################################
# Cluster Kubernetes                                                                           #
################################################################################################
resource "scaleway_vpc_private_network" "pn" {}

resource "scaleway_k8s_cluster" "cluster" {
  name                        = "tf-cluster"
  version                     = "1.29.1"
  cni                         = "cilium"
  private_network_id          = scaleway_vpc_private_network.pn.id
  delete_additional_resources = false
}

resource "scaleway_k8s_pool" "pool" {
  cluster_id = scaleway_k8s_cluster.cluster.id
  name       = "tf-pool"
  node_type  = "DEV1-M"
  size       = 1
}
################################################################################################
# BD de développement                                                                          #
################################################################################################

resource "scaleway_rdb_instance" "dev_database" {
  name           = "test-rdb"
  node_type      = "DB-DEV-S"
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = "my_initial_user"
  password       = "thiZ_is_v&ry_s3cret"
}

resource "scaleway_rdb_database" "dev_database_instance" {
  instance_id = scaleway_rdb_instance.dev_database.id
  name        = "my-new-database"
}

################################################################################################
#  BD de production                                                                            #
################################################################################################

resource "scaleway_rdb_instance" "prod_database" {
  name           = "test-rdb"
  node_type      = "DB-DEV-S"
  engine         = "PostgreSQL-15"
  is_ha_cluster  = true
  disable_backup = true
  user_name      = "my_initial_user"
  password       = "thiZ_is_v&ry_s3cret"
}

resource "scaleway_rdb_database" "prod_database_instance" {
  instance_id = scaleway_rdb_instance.prod_database.id
  name        = "my-new-database"
}

################################################################################################
# Entrée DNS de développement                                                                  #
################################################################################################

resource "scaleway_domain_record" "dev_dns" {
  dns_zone = "domain.tld"
  name     = "dev_dns"
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}

################################################################################################
# Entrée DNS de production                                                                     #
################################################################################################

resource "scaleway_domain_record" "prod_dns" {
  dns_zone = "domain.tld"
  name     = "www"
  type     = "A"
  data     = "1.2.3.4"
  ttl      = 3600
}

################################################################################################
# LoadBalancer de développement                                                                #
################################################################################################

resource "scaleway_lb_ip" "load_balancer_dev" {
  zone = "fr-par-1"
}

resource "scaleway_lb" "base_load_balancer_dev" {
  ip_ids = [scaleway_lb_ip.load_balancer_dev.id]
  zone   = scaleway_lb_ip.load_balancer_dev.zone
  type   = "LB-S"
}

################################################################################################
# LoadBalancer de production                                                                   #
################################################################################################

resource "scaleway_lb_ip" "load_balancer_prod" {
  zone = "fr-par-1"
}

resource "scaleway_lb" "base_load_balancer_prod" {
  ip_ids = [scaleway_lb_ip.load_balancer_prod.id]
  zone   = scaleway_lb_ip.load_balancer_prod.zone
  type   = "LB-S"
}