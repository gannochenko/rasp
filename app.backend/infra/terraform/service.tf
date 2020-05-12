resource "kubernetes_service" "app-backend" {
  metadata {
    name = "app-backend"
    namespace = var.namespace
  }
  spec {
    selector = {
      name = "app-backend"
    }
    port {
      port = var.port
    }
  }
}
