export const defaults = {
  components: {
    dockview: {
      resizable: true,
      showActionsButton: true,
      showNewTabButton: true,
      resizeHandleHitSize: 24,
      minSize: 10,
    },
  },
  variables: {
    themeId: "light",
    layoutId: "ide",
  },
}

export const presets: any = {
  layouts: {
    default: {
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
    ide: {
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
    full: {
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
    edge: {
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
              { id: "index-ts", data: { title: "index.ts", kind: "editor" } },
              { id: "router-ts", data: { title: "router.ts", kind: "editor" } },
            ],
          },
          {
            type: "panel",
            id: "editor-b",
            size: 42,
            tabs: [{ id: "preview", data: { title: "Preview", kind: "editor" } }],
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
              id: "explorer",
              data: { title: "Explorer", kind: "explorer" },
              closable: false,
            },
            { id: "search", data: { title: "Search", kind: "search" } },
          ],
        },
        right: {
          type: "edgePanel",
          id: "right-tools",
          size: 18,
          minSize: 12,
          maxSize: 28,
          tabs: [{ id: "outline", data: { title: "Outline", kind: "outline" } }],
        },
        bottom: {
          type: "edgePanel",
          id: "bottom-tools",
          size: 28,
          minSize: 18,
          maxSize: 42,
          tabs: [
            {
              id: "terminal",
              data: { title: "Terminal", kind: "terminal" },
              closable: false,
            },
            { id: "problems", data: { title: "Problems", kind: "problems" } },
          ],
        },
      },
    },
    dashboard: {
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
    floating: {
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
  themes: {
    default: {
      colorScheme: "dark",
      "--tilery-accent": "var(--site-workspace-accent)",
      "--tilery-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
      "--tilery-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
      "--tilery-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
    },
    light: {
      colorScheme: "light",
      "--tilery-bg": "#f4f6fb",
      "--tilery-fg": "#1f2937",
      "--tilery-panel-bg": "#ffffff",
      "--tilery-panel-border": "#d8dee8",
      "--tilery-tabbar-bg": "#edf1f7",
      "--tilery-tab-fg": "#667085",
      "--tilery-tab-active-bg": "#ffffff",
      "--tilery-tab-active-fg": "#111827",
      "--tilery-tab-hover-bg": "#e2e8f2",
      "--tilery-menu-bg": "#ffffff",
      "--tilery-action-hover-bg": "#e5ebf4",
      "--tilery-accent": "var(--site-workspace-accent)",
      "--tilery-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
      "--tilery-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
      "--tilery-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
    },
    dracula: {
      colorScheme: "dark",
      "--tilery-bg": "#191a21",
      "--tilery-fg": "#f8f8f2",
      "--tilery-panel-bg": "#282a36",
      "--tilery-panel-border": "#44475a",
      "--tilery-tabbar-bg": "#21222c",
      "--tilery-tab-fg": "#bdc0d6",
      "--tilery-tab-active-bg": "#343746",
      "--tilery-tab-active-fg": "#ffffff",
      "--tilery-tab-hover-bg": "#303241",
      "--tilery-menu-bg": "#282a36",
      "--tilery-action-hover-bg": "#3a3d4f",
      "--tilery-accent": "var(--site-workspace-accent)",
      "--tilery-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
      "--tilery-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
      "--tilery-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
    },
    replit: {
      colorScheme: "dark",
      "--tilery-bg": "#0e1525",
      "--tilery-fg": "#f5f9fc",
      "--tilery-panel-bg": "#1c2333",
      "--tilery-panel-border": "#30394f",
      "--tilery-tabbar-bg": "#131b2c",
      "--tilery-tab-fg": "#a5adba",
      "--tilery-tab-active-bg": "#20283a",
      "--tilery-tab-active-fg": "#ffffff",
      "--tilery-tab-hover-bg": "#26314a",
      "--tilery-menu-bg": "#1c2333",
      "--tilery-action-hover-bg": "#2a344a",
      "--tilery-accent": "var(--site-workspace-accent)",
      "--tilery-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
      "--tilery-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
      "--tilery-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
    },
    abyss: {
      colorScheme: "dark",
      "--tilery-bg": "#000c18",
      "--tilery-fg": "#d7ecff",
      "--tilery-panel-bg": "#001b33",
      "--tilery-panel-border": "#123a58",
      "--tilery-tabbar-bg": "#001426",
      "--tilery-tab-fg": "#8db9d6",
      "--tilery-tab-active-bg": "#002440",
      "--tilery-tab-active-fg": "#f4fbff",
      "--tilery-tab-hover-bg": "#052b4a",
      "--tilery-menu-bg": "#02243f",
      "--tilery-action-hover-bg": "#0b3555",
      "--tilery-accent": "var(--site-workspace-accent)",
      "--tilery-drop-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 84%)",
      "--tilery-drop-border": "color-mix(in srgb, var(--site-workspace-accent), transparent 42%)",
      "--tilery-resize-handle-active-bg": "color-mix(in srgb, var(--site-workspace-accent), transparent 40%)",
    },
  },
}

export const currentlayout: any = presets.layouts[defaults.variables.layoutId]
export const currentTheme = presets.themes[defaults.variables.themeId]