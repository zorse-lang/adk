# Atmosphere Development Kit

Mixed and multi provider infrastructure as code automation and framework.

## Scene Providers

- [x] Local Filesystem
- [x] AWS CloudFormation
- [x] Azure Resource Manager
- [x] Google Cloud Deployment Manager
- [x] Alibaba Cloud Resource Orchestration Service
- [ ] HashiCorp Terraform (planned)
- [ ] Kubernetes (planned)
- [ ] Github (planned)

## Render Pipeline

To demonstrate the render pipeline, we will use the following Mermaid diagram.  
Assume `[A-Z]`, `[a-z]`, and `[0-9]` are all instances of the Component class.  
Components can be attached to Entities that can be attached to other Entities.  
Together they form a tree structure called a System.

The System can render into multiple Scenes. Each Scene can filter the Components
by their criteria. Once a Component is filtered by a Scene, it will no longer be
able to be filtered by any other Scene.

Once all Scenes are rendered, the System breaks each Scene down to independently
renderable Views. Theses Views are ordered and packaged in a Composition.

```mermaid
stateDiagram
  state System {
    state Scene_1 {
      state View_7 {
        state Entity_ABC {
            B --> A
            B --> C
          }
          J D
      }
      state View_5 {
        state entity_EFGHI {
          G --> I
          G --> H
          F --> E
          F --> G
        }
      }
    }

    state Scene_2 {
      state View_4 {
        a
      }
      state View_6 {
        state Entity_bcdef {
          b --> c
          c --> d
          c --> e
          e --> f
        }
      }
      state View_2 {
        g h i j
      }
    }

    state Scene_3 {
      state View_3 {
        state Entity_012 {
          0 --> 1
          0 --> 2
        }
      }
      state View_1 {
        3 4 5 6
        state Entity_789 {
          9 --> 7
          9 --> 8
        }
      }
    }
  }

  B --> b
  a --> 0
  j --> 9
  f --> F
```

If you are a fellow game engine developer, you immediately may recognize this as
a multi headed renderer with an entity component system backing it.

If you are an Ops Engineer, the following terminology mapping might help you:

| Term        | Ops Lingo                    |
| ----------- | ---------------------------- |
| System      | Project/App/Chart etc.       |
| Scene       | Environment/Provider etc.    |
| View        | Stack/Manifest/Template etc. |
| Component   | Resource                     |
| Entity      | ResourceGroup                |
| Composition | Deployment                   |
| Token       | Deploy-Time Variable         |
