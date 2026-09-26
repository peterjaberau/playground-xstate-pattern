export const layoutWiringRecipes = [
  {
    wiringRecipeId: "ide-with-basic-flow",
    layoutId: "ide",
    tab: "explorer",
    data: [
      {
        tab: "explorer",
        component: "storiesList",
        story: "basic-flow",
        config: {
          title: "{{story.title}}",
          kind: "{{story.application}}",
        },
      },
    ],
  },
]