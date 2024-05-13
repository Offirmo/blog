


Slack messages
Alerts




reliability



error handling
error handling -- framework -- React https://react.dev/blog/2024/04/25/react-19#error-handling

logs

analytics

SLO
SLI

resilience

graceful degradation = ex. of batteries in flashlight

performance

security

graphql failure??

caching

capacity planning
cascading failures
cascading failures -- exponential backoff + jitter +

DDoS?


failure modes -- arbitrary
failure modes -- crash = no longer responding (= full omission)
failure modes -- omission = never send a response OR never receive a request (= timing = infinite late)
failure modes -- response
failure modes -- timing (perf) = outside the expected time interval (usually = too slow BUT rare cases of too fast, following an upgrade for ex.)
failure modes https://medium.com/baseds/modes-of-failure-part-1-6687504bfed6

incident management = prepare, detect, triage, mitigate, resolve, learn, remediate https://sre.google/resources/practices-and-processes/incident-management-guide/


runbooks

monitoring
monitoring "Understanding what is happening in your environment is key to maintaining efficient, secure, and compliant applications"


observability
observability -- logs -- data model https://opentelemetry.io/docs/specs/otel/logs/data-model/
observability -- logs = logs. Unfortunately, logs aren’t extremely useful for tracking code execution, as they typically lack contextual information, such as where they were called from. They become far more useful when they are included as part of a span, or when they are correlated with a trace and a span. Need to be stored and searchable. beware of costs!
observability -- telemetry
observability = a measure of how well internal states of a system can be inferred from knowledge of its external outputs https://andydote.co.uk/presentations/index.html
observability https://opentelemetry.io/docs/concepts/observability-primer/

organizational reliability continuum = absent -> reactive -> proactive -> strategic -> visionary / there is a significant cost associated with moving from one phase to another and a cost to remain very high on this curve. In our experience, being proactive is a healthy level to target and is ideal for most products https://cloud.google.com/blog/products/devops-sre/the-five-phases-of-organizational-reliability


service level objectives (SLO) https://sre.google/resources/practices-and-processes/art-of-slos/ https://sre.google/resources/


telemetry -- logs https://opentelemetry.io/docs/concepts/observability-primer/#logs

telemetry -- metrics -- application-based vs time-based
telemetry -- metrics -- Metrics Semantic Conventions https://opentelemetry.io/docs/specs/semconv/general/metrics/
telemetry -- metrics = Time spans can be aggregated by their attributes to produce metrics.
telemetry -- openTelemetry https://opentelemetry.io/docs/concepts/observability-primer/
telemetry -- signals = system outputs that describe the underlying activity of the operating system and applications running on a platform. A signal can be something you want to measure at a specific point in time, like temperature or memory usage, or an event that goes through the components of your distributed system that you’d like to trace. You can group different signals together to observe the inner workings of the same piece of technology under different angles. https://opentelemetry.io/docs/concepts/signals/
telemetry -- span -- events = events can happen during a time span
telemetry -- span -- hierarchy = root span (ex. edge) > local root span (ex. service) > span
telemetry -- span -- time span = a measure of how long an operation took in a service. Time spans contain information about the operations they represent.
telemetry -- span = a unit of work or operation. tracks specific operations that a request makes, painting a picture of what happened during the time in which that operation was executed  https://opentelemetry.io/docs/concepts/observability-primer/#spans
telemetry -- trace -- context = need to be passed around (traceId, spanId, traceFlags) trace id = non-zero 128-bit, span id = 64 bits, traceFlags = 8bits
telemetry -- trace -- disconnected = Failure to pass the current context to child threads/operations/services can lead to disconnected traces
telemetry -- trace -- distributed = records the paths taken by requests (made by an application or end-user) as they propagate through multi-service architectures, like microservice and serverless applications.
telemetry -- trace -- id -- zipkin https://github.com/openzipkin/b3-propagation
telemetry -- trace -- id = very important to be consistent and could be aggregated!
telemetry -- trace -- Trace Semantic Conventions https://opentelemetry.io/docs/specs/semconv/general/trace/
telemetry -- trace = collection of time spans and their relationships to each other. A trace represents a transaction within a service or across services
telemetry -- tracing = the practice of capturing traces
telemetry -- very important for distributed perf problems! (on big customers, what takes time?)
Time to Detection (TTD)
