resource "kubernetes_deployment" "app-mail-checker" {
  metadata {
    name = "app-mail-checker"
    namespace = var.namespace
    labels = {
      name = "app-mail-checker"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        name = "app-mail-checker"
      }
    }

    template {
      metadata {
        namespace = var.namespace
        labels = {
          name = "app-mail-checker"
        }
      }

      spec {
        container {
          image = "awesome1888/rasp_mail-checker:${local.version}"
          name  = "app-mail-checker"

          env {
            name = "NETWORK__HOST"
            value = var.host
          }

          env {
            name = "NETWORK__PORT"
            value = var.port
          }

          env {
            name = "NETWORK__CORS"
            value = ""
          }

          env {
            name = "DATABASE__URL"
            value = ""
          }

          liveness_probe {
            http_get {
              path = "/health"
              port = var.port
            }

            initial_delay_seconds = 3
            period_seconds        = 3
          }
        }
      }
    }
  }
}
