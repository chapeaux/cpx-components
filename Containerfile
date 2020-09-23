FROM ubi8-minimal

USER root

LABEL author="Luke Dary <ldary@redhat.com>"
LABEL description="Chapeaux Component Server"

RUN mkdir -p /home/deno 
# && groupadd -r deno && \
#   useradd -r -g deno -d /home/deno -s /sbin/nologin -c "Deno user" deno

ENV HOME=/home/deno

WORKDIR /home/deno

RUN microdnf install unzip
#RUN curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
RUN curl -fsSL https://deno.land/x/install/install.sh | sh
RUN export PATH=$HOME/.deno/bin:$PATH
#RUN git clone --recurse-submodules https://github.com/denoland/deno.git