terraform {
  required_providers {
    scaleway = {
      source  = "scaleway/scaleway"
      version = "2.47.0"
    }
  }
}
provider "scaleway" {}