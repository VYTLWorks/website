---
layout: doc
title: Team
---

<script setup>
import TeamPage from '../../components/team/TeamPage.vue'
import { TEAM_MEMBERS } from '../../components/team/team.ts'
</script>

<TeamPage :teamMembers="TEAM_MEMBERS" />
