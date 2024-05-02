<script>
  import { Hero, Carrousel, Link, AnimationCard, WhatWeDo } from '$lib/index'
  export let data
  const newData = data?.landingPage?.[0].sectionCollection.items
</script>

<Hero items={newData?.[1]} />

<h2>
  <span>Explore the cocktail walks</span>
  <Link title="see all walks" />
</h2>

<Carrousel items={newData?.[3].carrouselCollection?.items} />

<h2>How it Works</h2>
<AnimationCard items={newData?.[4].carrouselCollection?.items} />

<h2>What We DO</h2>
<WhatWeDo items={newData?.[5].carrouselCollection?.items} />

<style>
  h2 {
    display: flex;
    font-size: 40px;
    padding: 2rem 0;
    color: var(--accent2-tertiary);
  }
  h2:nth-child(2) {
    justify-content: space-between;
  }
  h2:nth-child(4) {
    position: sticky;
    top: 50px;
    justify-content: center;
  }

  h2:nth-child(6) {
    display: flex;
    justify-content: center;
  }
</style>
