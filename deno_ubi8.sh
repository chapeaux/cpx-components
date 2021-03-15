#!/usr/bin/env bash
# build_deno_ubi8.sh
#
ctr=$(buildah from registry.access.redhat.com/ubi8/ubi-minimal)
mountpoint=$(buildah mount $ctr)
mkdir $mountpoint/var/www
buildah config --workingdir /var/www $ctr
buildah copy $ctr . /var/www
buildah config --env DENO_INSTALL=/usr/local $ctr
buildah config --env PATH=$PATH:/usr/local/bin $ctr
buildah run --isolation rootless $ctr /bin/sh -c "microdnf update; \
microdnf -y install unzip; \
curl -fsSL https://deno.land/x/install/install.sh | sh; \
microdnf clean all; \
deno compile --output cpx_app --unstable --allow-net --allow-read server.ts"
buildah config --entrypoint "./cpx_app" $ctr
buildah config --port 8000 $ctr
buildah commit --squash $ctr cpx/cpx-app
buildah unmount $ctr
buildah rm $ctr