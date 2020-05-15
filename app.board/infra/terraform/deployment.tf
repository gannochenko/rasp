resource "kubernetes_deployment" "app-board" {
  metadata {
    name = "app-board"
    namespace = var.namespace
    labels = {
      name = "app-board"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        name = "app-board"
      }
    }

    template {
      metadata {
        namespace = var.namespace
        labels = {
          name = "app-board"
        }
      }

      spec {
        container {
          image = "gannochenko/rasp_board:${local.version}"
          name  = "app-board"

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
