resource "kubernetes_service" "app-mail-checker" {
  metadata {
    name = "app-mail-checker"
    namespace = var.namespace
  }
  spec {
    selector = {
      name = "app-mail-checker"
    }
    port {
      port = var.port
    }
  }
}
