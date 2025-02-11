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