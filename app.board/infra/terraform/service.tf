resource "kubernetes_service" "app-board" {
  metadata {
    name = "app-board"
    namespace = var.namespace
  }
  spec {
    selector = {
      name = "app-board"
    }
    port {
      port = var.port
    }
  }
}
