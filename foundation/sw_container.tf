################################################################################################
# Container registry                                                                           #
################################################################################################

resource "scaleway_registry_namespace" "container_registry" {
  name        = "container_registry"
  description = "Main container registry"
  is_public   = false
}