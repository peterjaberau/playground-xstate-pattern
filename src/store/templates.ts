export const layoutTemplates = [
  {
    id: "default",
    title: "Default",
    type: "ui",
    template: {
      layout: {
        type: "group",
        direction: "horizontal",
        children: [
          {
            type: "panel",
            id: "sidebar",
            size: 24,
            tabs: [{ id: "files", data: { title: "Files", kind: "files" } }],
          },
          {
            type: "group",
            direction: "vertical",
            size: 76,
            children: [
              {
                type: "panel",
                id: "editor",
                size: 68,
                activeTabId: "main-ts",
                tabs: [
                  { id: "main-ts", data: { title: "main.ts", kind: "editor" } },
                  { id: "styles-css", data: { title: "styles.css", kind: "editor" } },
                ],
              },
              {
                type: "panel",
                id: "terminal",
                size: 32,
                tabs: [
                  {
                    id: "terminal-tab",
                    data: { title: "Terminal", kind: "terminal" },
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: "full",
    title: "Full",
    type: "ui",
    subType: "layout",
    template: {
      initialLayout: {
        type: "root",
        main: {
          type: "group",
          direction: "horizontal",
          children: [
            {
              type: "panel",
              id: "editor-a",
              size: 58,
              tabs: [
                { id: "index-ts", data: { title: "index.ts" } },
                { id: "router-ts", data: { title: "router.ts" } },
              ],
            },
            {
              type: "panel",
              id: "editor-b",
              size: 42,
              tabs: [
                {
                  id: "field",
                  data: {
                    title: "Field",
                    inputs: {
                      componentId: "forms-field",
                    },
                  },
                },
              ],
            },
          ],
        },
        edges: {
          left: {
            type: "edgePanel",
            id: "left-tools",
            size: 22,
            minSize: 14,
            maxSize: 34,
            tabs: [
              {
                id: "registry",
                data: { title: "Registry" },
                closable: false,
              },
              {
                id: "button",
                data: {
                  title: "Button",
                  inputs: {
                    componentId: "components-button",
                  },
                },
              },
            ],
          },
          right: {
            type: "edgePanel",
            id: "right-tools",
            size: 18,
            minSize: 12,
            maxSize: 28,
            tabs: [
              {
                id: "popover",
                data: {
                  title: "Popover",
                  inputs: {
                    componentId: "components-popover",
                  },
                },
              },
            ],
          },
          bottom: {
            type: "edgePanel",
            id: "bottom-tools",
            size: 28,
            minSize: 18,
            maxSize: 42,
            tabs: [
              {
                id: "checkbox",
                data: {
                  title: "Checkbox",
                  inputs: {
                    componentId: "forms-checkbox",
                  },
                },
                closable: false,
              },
              {
                id: "slider",
                data: {
                  title: "Slider",
                  inputs: {
                    componentId: "forms-slider",
                  },
                },
              },
            ],
          },
        },
      },
    },
  },
  {
    id: "ide",
    title: "IDE + edges",
    type: "ui",
    subType: "layout",
    template: {
      initialLayout: {
        type: "root",
        edges: {
          left: {
            type: "edgePanel",
            id: "edge-explorer",
            size: 20,
            tabs: [{ id: "explorer", data: { title: "Explorer", kind: "files" } }],
          },
          bottom: {
            type: "edgePanel",
            id: "edge-output",
            size: 26,
            tabs: [
              { id: "output", data: { title: "Output", kind: "output" } },
              { id: "ide-terminal", data: { title: "Terminal", kind: "terminal" } },
            ],
          },
        },
        main: {
          type: "group",
          direction: "horizontal",
          children: [
            {
              type: "panel",
              id: "ide-editor",
              size: 64,
              activeTabId: "ide-main",
              tabs: [
                { id: "ide-main", data: { title: "index.tsx", kind: "editor" } },
                { id: "ide-readme", data: { title: "README.md", kind: "notes" } },
              ],
            },
            {
              type: "panel",
              id: "ide-preview",
              size: 36,
              tabs: [
                {
                  id: "ide-preview-tab",
                  data: { title: "Preview", kind: "preview" },
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    id: "dashboard",
    title: "Dashboard",
    type: "ui",
    subType: "layout",
    template: {
      initialLayout: {
        type: "group",
        direction: "vertical",
        children: [
          {
            type: "group",
            direction: "horizontal",
            size: 50,
            children: [
              {
                type: "panel",
                id: "metrics",
                size: 50,
                tabs: [{ id: "metrics-tab", data: { title: "Metrics", kind: "preview" } }],
              },
              {
                type: "panel",
                id: "traffic",
                size: 50,
                tabs: [{ id: "traffic-tab", data: { title: "Traffic", kind: "preview" } }],
              },
            ],
          },
          {
            type: "group",
            direction: "horizontal",
            size: 50,
            children: [
              {
                type: "panel",
                id: "logs",
                size: 60,
                tabs: [{ id: "logs-tab", data: { title: "Logs", kind: "output" } }],
              },
              {
                type: "panel",
                id: "activity",
                size: 40,
                tabs: [{ id: "activity-tab", data: { title: "Activity", kind: "notes" } }],
              },
            ],
          },
        ],
      },
    },
  },
  {
    id: "floating",
    title: "Floating",
    type: "ui",
    subType: "layout",
    template: {

      initialLayout: {
        type: "root",
        main: {
          type: "group",
          direction: "horizontal",
          children: [
            {
              type: "panel",
              id: "float-nav",
              size: 28,
              tabs: [{ id: "float-files", data: { title: "Files", kind: "files" } }],
            },
            {
              type: "panel",
              id: "float-editor",
              size: 72,
              tabs: [{ id: "float-main", data: { title: "app.ts", kind: "editor" } }],
            },
          ],
        },
        floating: [
          {
            type: "floatingPanel",
            id: "float-inspector",
            bounds: { x: 52, y: 14, width: 38, height: 48 },
            tabs: [
              {
                id: "float-inspect-tab",
                data: { title: "Inspector", kind: "notes" },
              },
            ],
          },
        ],
      },
    },
  },
]

export const themeTemplates = [
  {
    id: "default",
    title: "Default",
    type: "appearance",
    subType: "theme",
    template: {
      style: {
        colorScheme: "dark",
        "--view-accent": "var(--site-workspace-accent)",
        "--view-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
        "--view-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
        "--view-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
      },
    },
  },
  {
    id: "light",
    title: "Light",
    type: "appearance",
    subType: "theme",
    template: {
      style: {
        colorScheme: "light",
        "--view-bg": "#f4f6fb",
        "--view-fg": "#1f2937",
        "--view-panel-bg": "#ffffff",
        "--view-panel-border": "#d8dee8",
        "--view-tabbar-bg": "#edf1f7",
        "--view-tab-fg": "#667085",
        "--view-tab-active-bg": "#ffffff",
        "--view-tab-active-fg": "#111827",
        "--view-tab-hover-bg": "#e2e8f2",
        "--view-menu-bg": "#ffffff",
        "--view-action-hover-bg": "#e5ebf4",
        "--view-accent": "var(--site-workspace-accent)",
        "--view-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
        "--view-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
        "--view-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
      },
    },
  },
  {
    id: "dracula",
    type: "appearance",
    subType: "theme",
    title: "Dracula",
    template: {
      style: {
        colorScheme: "dark",
        "--view-bg": "#191a21",
        "--view-fg": "#f8f8f2",
        "--view-panel-bg": "#282a36",
        "--view-panel-border": "#44475a",
        "--view-tabbar-bg": "#21222c",
        "--view-tab-fg": "#bdc0d6",
        "--view-tab-active-bg": "#343746",
        "--view-tab-active-fg": "#ffffff",
        "--view-tab-hover-bg": "#303241",
        "--view-menu-bg": "#282a36",
        "--view-action-hover-bg": "#3a3d4f",
        "--view-accent": "var(--site-workspace-accent)",
        "--view-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
        "--view-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
        "--view-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
      },
    },
  },
  {
    id: "replit",
    title: "Replit",
    type: "appearance",
    subType: "theme",
    template: {
      style: {
        colorScheme: "dark",
        "--view-bg": "#0e1525",
        "--view-fg": "#f5f9fc",
        "--view-panel-bg": "#1c2333",
        "--view-panel-border": "#30394f",
        "--view-tabbar-bg": "#131b2c",
        "--view-tab-fg": "#a5adba",
        "--view-tab-active-bg": "#20283a",
        "--view-tab-active-fg": "#ffffff",
        "--view-tab-hover-bg": "#26314a",
        "--view-menu-bg": "#1c2333",
        "--view-action-hover-bg": "#2a344a",
        "--view-accent": "var(--site-workspace-accent)",
        "--view-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
        "--view-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
        "--view-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
      },
    },
  },
  {
    id: "abyss",
    type: "appearance",
    subType: "theme",
    title: "Abyss",
    template: {
      style: {
        colorScheme: "dark",
        "--view-bg": "#000c18",
        "--view-fg": "#d7ecff",
        "--view-panel-bg": "#001b33",
        "--view-panel-border": "#123a58",
        "--view-tabbar-bg": "#001426",
        "--view-tab-fg": "#8db9d6",
        "--view-tab-active-bg": "#002440",
        "--view-tab-active-fg": "#f4fbff",
        "--view-tab-hover-bg": "#052b4a",
        "--view-menu-bg": "#02243f",
        "--view-action-hover-bg": "#0b3555",
        "--view-accent": "var(--site-workspace-accent)",
        "--view-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
        "--view-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
        "--view-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
      },
    },
  },
]


