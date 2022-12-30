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

To demonstrate the render pipeline, the following Mermaid diagram is used.  
Assume `[A-Z]`, `[a-z]`, and `[0-9]` are all instances of the Component class.  
Components can be attached to Entities that can be attached to other Entities.  
Together they form a tree like structure called a System.

The System can render into multiple Scenes. Each Scene can filter the Components
by Scene's criteria. Once a Component is filtered by a Scene, it'll no longer be
able to be filtered by any other Scene (order of the input Scenes matter).

Once all Scenes are rendered, the System breaks each Scene down to independently
renderable Views. Theses Views are ordered and packaged in a Composition output.

Directed arrows indicate a Component having a dependency on another Component.  
Components `[A-Z]`, `[a-z]`, and `[0-9]` are filtered into Scenes 1 to 3.  
You can see how System's `compose()` method breaks the following system down.

See System [API docs](https://zorse-lang.github.io/adk/classes/core.System.html)
for more information on details of the render pipeline in code.

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
        state Entity_EFGHI {
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

The System took the tree structure of the entity component system and broke down
the tree into flattened Views, while respecting Component dependency hierarchy.

If you are a fellow game engine developer, you may immediately recognize this as
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

Example use cases of such a renderer would be making Views that depend on other
Views. For example:

- A config file that its content includes the output of a CloudFormation stack.
- A CloudFormation stack that depends on a Kubernetes deployment.
- A Terraform app that needs to upload to S3 prior to deployment.
