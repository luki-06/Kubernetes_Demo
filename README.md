# Kubernetes Demo


> Alle Befehle vom `demo/`-Ordner aus ausführen.

---

## Vorbereitung 

```bash
minikube start

# Docker-Images direkt im Minikube-Cluster bauen:
eval $(minikube docker-env)
docker build -t node-app:v1 ./app
docker build -t node-app:v2 \
  --build-arg VERSION="Version 2" \
  --build-arg COLOR="#27ae60" \
  ./app

kubectl apply -f k8s/
minikube service node-app-service     # öffnet Browser
```

---


## Showcase 1 — Scaling

```bash
kubectl scale deployment/node-app --replicas=10
kubectl get pods -w
# Ctrl+C
```


```bash
kubectl scale deployment/node-app --replicas=3
```

---

## Showcase 2 — Self-Healing

```bash
kubectl get pods                      # Pod-Namen notieren
kubectl delete pod <pod-name>
kubectl get pods -w                   # neuer Pod startet automatisch
# Ctrl+C
```

---

## Showcase 3 — Rolling Update & Rollback

```bash
# Update auf V2 (Seite refreshen während Update läuft!)
kubectl set image deployment/node-app node-app=node-app:v2
kubectl rollout status deployment/node-app

# Rollback zu V1
kubectl rollout undo deployment/node-app
```

---

## Aufräumen

```bash
kubectl delete -f k8s/
minikube stop
```

---

## Troubleshooting

| Problem | Befehl |
|---|---|
| Pod startet nicht | `kubectl describe pod <name>` |
| Logs anzeigen | `kubectl logs <pod-name>` |
| Alle Ressourcen | `kubectl get all` |
| Image nicht gefunden | `eval $(minikube docker-env)` und neu bauen |
