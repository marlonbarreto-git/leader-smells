# The Firefighter Hero - Research Notes

## Overview
Leaders who create or allow crises to emerge so they can solve them heroically. They thrive on chaos, get rewarded for firefighting, and have no incentive to prevent problems.

## Key Research & Sources

### Blameless Culture and Incident Management

**Psychological Safety in Incident Response**
- Google's research on high-performing teams: psychological safety is the most important factor
- A blameless approach creates psychologically safe environments where people feel comfortable taking risks and learning from mistakes

**Source:**
- https://incident.io/blog/psychological-safety-in-incident-management
- https://rootly.com/sre/how-rootly-builds-a-blameless-incident-response-culture

**Blame vs. Prevention Culture**
- In blame-focused environments, fear of reprimand causes:
  - Delayed incident reporting
  - Hidden information
  - Prolonged outages
  - Stressful work environment contributing to burnout
- If people expect to be singled out as the cause, you get:
  - Underreporting issues
  - Anxiety about on-call
  - Sidestepping important but high-risk work

**Just Culture Framework**
- A just culture differentiates between:
  - **Human error** → managed through system redesign
  - **At-risk behavior** → addressed with coaching
  - **Reckless behavior** → appropriate accountability
- Accountability shifts from punishment to responsible ownership

### Blameless Postmortems

**Key Principles**
- Blameless postmortem culture enables learning
- Creates psychological safety that produces honest reporting
- Focuses analysis on systemic improvement rather than individual fault
- Treats failures as opportunities to strengthen systems

**Results of Blameless SRE**
- Significant improvements in Mean Time To Resolution (MTTR)
- Reduction in incident frequency
- Enhanced system reliability

**Source:**
- https://devops.com/from-incidents-to-insights-the-power-of-blameless-postmortems/
- https://upstat.io/blog/blameless-postmortem-culture

**Practical Recommendations**
- Separate post-mortems from performance management
- Make it explicit: participation in post-mortems will never factor into performance evaluations
- "Blameless culture requires active maintenance. It's not a policy you announce once."

### Amy Edmondson's Psychological Safety Research

**Foundational Study (1999)**
- Published "Psychological Safety and Learning Behavior in Work Teams"
- Study of 51 work teams in manufacturing company
- Team psychological safety is associated with learning behavior
- Learning behavior mediates between psychological safety and team performance

**Key Finding**
- In hospital studies, some teams openly acknowledged medication errors and discussed prevention
- In other teams, members kept knowledge of errors to themselves
- The difference was psychological safety

**Impact**
- People who feel psychologically safer work better in teams
- Can share information and be transparent
- Productivity becomes a feedback loop that bonds teams

**Source:**
- Edmondson, A. (1999). "Psychological Safety and Learning Behavior in Work Teams" - Administrative Science Quarterly
- https://journals.sagepub.com/doi/10.2307/2666999
- https://web.mit.edu/curhan/www/docs/Articles/15341_Readings/Group_Performance/Edmondson%20Psychological%20safety.pdf

### Hero Culture Problems

**The Perverse Incentive**
- Organizations often reward firefighting more than fire prevention
- Heroes who save the day get promoted; quiet prevention is invisible
- This creates incentive to allow (or create) crises

**Research on Praise and Recognition**
- The "availability heuristic" makes dramatic rescues more memorable than steady prevention
- Visible heroics are easier to recognize than invisible good practices

## The Pattern Description

The Firefighter Hero:
- Allows known problems to become crises before acting
- Steps in at the last moment to "save the day"
- Takes credit for heroic problem-solving
- Doesn't invest in prevention, monitoring, or automation
- Creates dependency on their firefighting abilities
- May unconsciously (or consciously) sabotage stability
- Thrives on the adrenaline and recognition of emergencies

Symptoms:
- Same types of crises keep recurring
- Prevention work is deprioritized
- The same person always "saves" the situation
- Post-incident reviews don't lead to systemic fixes
- Team operates in constant emergency mode
- Sustainable solutions are never implemented

## Why It Hurts

1. **Chronic Stress**: Constant emergencies exhaust the team
2. **Prevention Neglect**: Time spent firefighting isn't spent preventing
3. **Single Point of Failure**: Dependency on the "hero"
4. **Learning Blocked**: If failures aren't safe to discuss, they repeat
5. **Burnout**: Emergency mode is not sustainable
6. **System Fragility**: No investment in resilience
7. **Perverse Incentives**: Rewarding heroes discourages prevention

## The Fix

1. **Reward Prevention**: Celebrate avoided incidents, not just resolved ones
2. **Blameless Postmortems**: Focus on systems, not individuals
3. **Track Recurring Issues**: If it happened twice, prevent a third time
4. **Invest in Resilience**: Automation, monitoring, redundancy
5. **Spread Knowledge**: No one person should be the only one who can fix things
6. **Measure Mean Time Between Failures**: Not just Mean Time To Recovery
7. **Question Heroes**: If the same person always saves the day, ask why
8. **Recognize Quiet Work**: Make prevention visible and valued

## If You're Affected

1. **Document Recurring Issues**: Build the case that prevention is needed
2. **Propose Systemic Fixes**: After each incident, recommend prevention
3. **Avoid Hero Dependency**: Cross-train so you're not the only one
4. **Advocate for Blameless Culture**: Share research on psychological safety
5. **Track the Pattern**: Note when crises are "allowed" to develop
6. **Protect Yourself**: Don't burn out being the only firefighter
7. **Build Alliances**: Find others who want to shift from reactive to proactive
