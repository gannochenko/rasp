resource "kubernetes_service" "app-dashboard" {
  metadata {
    name = "app-dashboard"
    namespace = var.namespace
  }
  spec {
    selector = {
      name = "app-dashboard"
    }
    port {
      port = var.port
    }
  }
}
