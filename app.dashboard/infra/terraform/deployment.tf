resource "kubernetes_deployment" "app-dashboard" {
  metadata {
    name = "app-dashboard"
    namespace = var.namespace
    labels = {
      name = "app-dashboard"
    }
  }

  spec {
    replicas = 2

    selector {
      match_labels = {
        name = "app-dashboard"
      }
    }

    template {
      metadata {
        namespace = var.namespace
        labels = {
          name = "app-dashboard"
        }
      }

      spec {
        container {
          image = "gannochenko/rasp_dashboard:${local.version}"
          name  = "app-dashboard"

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
            name = "API__URL"
            value = var.api-url
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
