resource "kubernetes_deployment" "app-backend" {
  metadata {
    name = "app-backend"
    namespace = var.namespace
    labels = {
      name = "app-backend"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        name = "app-backend"
      }
    }

    template {
      metadata {
        namespace = var.namespace
        labels = {
          name = "app-backend"
        }
      }

      spec {
        container {
          image = "gannochenko/rasp_backend:${local.version}"
          name  = "app-backend"

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
