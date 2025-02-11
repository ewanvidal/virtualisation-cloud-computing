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