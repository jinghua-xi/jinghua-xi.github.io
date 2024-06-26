---
layout: post
title: Dynamic System on Circle
date: 2023-10-16 00:00:00-0400
description: we study dynamic system on circle with rotation number \infty
tags: rotation-number 
categories: dynamic-system
related_posts: false
---

## Motivation and naive example

To see the dynamical properties of a transformation, we hope the effect of transformation will accumulate hence we will mainly focus on the orientaion-preserving homeomorphism from $$S^1$$ to itself.

A naive class of such transformation is rotation $$R_\alpha$$. And they can get divided into two classes up to their dynamical behavior, namely $$\alpha$$  rational or irrational. For an arbitrary point on $$S^1$$, its orbit under $$R_\alpha$$ is either periodic or dense in $$S^1$$ respectively.

## Classification of oientation-preseving homeomorphisms on $$S^1$$

Indeed, these two classes of rotation represent the two major classes of orientaion-preserving homeomorphism on $$S^1$$. We can use the quantity rotation number to classify the transformation. In order to have deeper insight into the orientaion-pereserving homeomorphism, we shall view them from the perspectives of lifting.

We say $$F:\mathbb{R}\rightarrow \mathbb{R}$$ is a lifting of $$f$$ if $$\pi F = f \pi$$ where $$\pi: \mathbb{R} \rightarrow S^1$$ is the covering map.  that $$F(x+1)=F(It’s immediatex)+1$$ (moreover if $$G:=F+k$$ then $$G^n=F^n+nk$$) and $$F_1(x)\equiv F_2(x) (mod 1)$$. The first observation indicates that we should regard a orientaion-preserving homeomorphism $$f$$ on $$S^1$$ as an unique periodic function $$F(x)-x$$ up to adding a constant integer. Observe that $$F^k(x+1)-(x+1)=F(F^{k-1}(x)+1)-(x+1)=F^k(x)-x$$ which is again perodic.

We can now define the rotation number of $$F$$ by $$\rho(F)=\lim\limits_{n\rightarrow \infty}\frac{F^n(x)}{n}=\lim\limits_{n\rightarrow \infty}\frac{F^n(x)-x}{n}=\lim\limits_{n\rightarrow \infty}\frac{F^n(x+m)-(x+m)}{n}=\lim\limits_{n\rightarrow \infty}\frac{F^n(y)-y}{n}=\lim\limits_{n\rightarrow \infty}\frac{F^n(y)}{n}$$ for any $$x,y$$ where $$y$$ must get squeezed in some interval $$[x+m,x+m+1]$$ as $$F$$ monotonically increase, which means the limitation doesn’t depend on the choice of $$x$$. By the above argument, $$\rho(f):=\rho(F)(mod1)$$ is well-defined.

Yet we need to show the limit does exist. We seperate it into two cases:

(1) $$f$$ admits a periodic point, say $$x_0$$. In the sense of lifting, this means $$F^{n_0}(x_0)=x_0+k_0$$ for some $$n_0\in\mathbb{N},k_0\in \mathbb{Z}$$. Inductively, one has $$F^{mn_0}(x_0)=x_0+mk_0,\forall m\in \mathbb{N}$$ .

Claim: If $$\lim\limits_{m\rightarrow \infty}\frac{a_{mk}}{mk}=a$$ for fixed $$k$$ and $$a_m$$ bounded, then $$\lim\limits_{m\rightarrow \infty}\frac{a_{m}}{m}=a$$.

By the claim, we can reinterpret the reuslt into $$\rho(f)=\lim\limits_{m\rightarrow \infty}\frac{F^{mn_0}(x_0)}{mn_0}(mod1)=\frac{k_0}{n_0}(mod1)$$.

(2)$$f$$ doesn’t admit a periodic point. In the sense of lifting, this means $$\forall m\in \mathbb{N},\exists P_m\in \mathbb{Z}$$  s.t. $$P_m<F^m(x)-x<P_m+1$$. By taking $$x$$ as$$F^m(x)-x$$, $$P_m<F^{nm}(x)-F^{(n-1)m}x<P_m+1$$. By sumation, $$nP_m<F^{nm}(0)-0<(P_m+1)n$$ i.e. $$\frac{P_m}{m}<\frac{F^{nm}(0)}{mn}<\frac{P_m+1}{m}$$. Notice from beginning $$\frac{P_m}{m}<\frac{F^{m}(0)}{m}<\frac{P_m+1}{m}$$ thus $$\lvert\frac{F^{nm}(0)}{mn}-\frac{F^{m}(0)}{m}\rvert<\frac{1}{m}$$. By symmetry,  $$\lvert\frac{F^{nm}(0)}{mn}-\frac{F^{n}(0)}{n}\rvert<\frac{1}{n}$$ then $$\lvert\frac{F^{m}(0)}{m}-\frac{F^{n}(0)}{n}\rvert<\frac{1}{n}+\frac{1}{m}$$ i.e. $$\frac{F^n(0)}{n}$$ is Cauchy hence verify the existence of limit.

Remark: the rotation number of second case cannot be rational since later we will see rational rotation number implies the existence of periodic point.

Let’s summerize what we get currently:

Theorem: (1) $$\rho(F)=\lim\limits_{n\rightarrow \infty}\frac{F^n(x)-x}{n}$$ exists and dosen’t depend on $$x\in\mathbb{R}$$ (2) $$\rho(F+k)=\rho(F)+k,\forall x\in\mathbb{Z}$$ hence $$\rho(f):=\rho(F)$$ is well-defined.

## From rotation number back to homeomorphism on $$S^1$$

## rational rotation number

Conversely, let’s see given the rotation number of a homeomorphism on $$S^1$$, what can we say about it in the sense of dynamical behavior.

Proposition: If the rotation number $$\rho(f)$$ is rational, then $$f$$ admits a periodic point.

Proof: First observe that say $$\rho(f)=\frac{p}{q}$$ then $$\rho(f^q-p)=q\cdot \rho(f)-q=0$$, hence we may assume $$\rho(f)=0$$ since we can substitude $$f$$ by $$f^q-p$$, moreover a periodic point of $$f$$ is also a periodic point of $$f^q-p$$.

We prompt the proposition using the following lemma:

Lemma: For $$G$$ a lift of $$g$$ with $$\rho(G)=0$$ and a point $$x\in S^1$$ with $$G(x_0)-x_0>0$$. Then there will be a point $$x'>x_0$$ such that $$G(x')-x'=0$$.

Proof: Suppose $$G(x)-x>0,\forall x>x_0$$. Since it’s continuous and periodic hence we can choose $$\delta=\inf\limits_{x\in\mathbb{R}}G(x)-x>0$$. Then $$G(x)-x\geq\delta,\forall x\in \mathbb{R}$$. By cliché trick we accumulate the error $$G^k(x)-x\geq k\delta$$. But this we deviate the rotation number $$\rho(g)=\lim\limits_{k\rightarrow \infty}\frac{G^k(x)-x}{k}(mod1)=\delta(mod1)>0$$ contradicated.

Then the proposition follows by Lemma.

Remark: those fixed points are attractors of the system

To conclude what we achieve at this moment:

If the rotation number $$\rho(f)=\frac{p}{q}\in \mathbb{Q}$$ and a point $$x\in S^1$$, either (1) $$x$$ is $$q$$-periodic, or (2) there is a $$q$$-periodic point $$x_0$$ s.t. $$\lvert f^n(x)-f^n(x_0) \rvert\rightarrow 0,n\rightarrow \infty$$.

On the other hand, if the rotation number $$\rho(f)=\alpha$$ irrational, then there is a semi-conjugacy $$h:S^1\rightarrow S^1$$ between $$f$$ and $$R_\alpha$$.

## Irrational rotation number

### natural conjugacy to the rotation

Definition: For orientation-preserving $$f,g:S^1\rightarrow S^1$$, we say they are $$h$$-topological conjugacy if there is a orientation-preserving homeomorphism $$h:S^1\rightarrow S^1$$ s.t. $$f=h^{-1}\circ g\circ h$$. A semi-conjugacy $$h$$ is a surjective map of degree $$1$$ i.e. a lifting $$H(x+1)=H(x)+1$$

A natural way to establish the semi-conjugacy is that first pick a point $$x_0$$ and consider the extended orbit $$eo(x_0):=\{F^i(x_0)+j:\forall i,j\in\mathbb{Z}\}$$ where $$F$$ is a lift of $$f$$, then define $$H:eo(x_0)\rightarrow \mathbb{R}, F^i(x_0)+j \mapsto i\alpha+j$$ which is well-defined since $$F$$ invertible and $$\rho(f)$$ irrational hence $$f$$ periodic-pioint-free.

Observation1: $$H$$ is strictly increasing.

$$F^i(x_0)+j<F^k(x_0)+l$$ implies $$F^{i-k}(F^k(x_0))-F^k(x_0)<l-j$$. Together with $$\rho(F)\notin \mathbb{Q}$$ indicating $$F^{i-k}(x)-x$$ never touches integer, we have $$F^{i-k}(x)-x<l-j,\forall x\in\mathbb{R}$$ by mean-value theorem. Assuming $$i>k$$, one has $$\frac{F^{m(i-k)}(x)-x}{m(i-k)}<\frac{m(l-j)}{m(i-k)}$$ which means $$\alpha=\rho(F)\leq \frac{l-j}{i-k}$$, moreover the inequlity has to be strict as $$\alpha$$ irrational thus completes the proof.

Observation2: $$H$$ is of degree 1.

$$H(F^i(x_0)+j+1)=i\alpha +j+1=H(F^i(x_0)+j)+1$$

Observation3: $$H\circ F=R_\alpha\circ H$$

$$H(F(F^i(x_0)+j))=H(F^{i+1}(x_0)+j)=(i+1)\alpha+j=R_\alpha(H(F^i(x_0)+j))$$

Then we may extend $$H$$ on $$\mathbb{R}$$ by setting $$\hat H(x):=\begin{cases}H(x),x\in eo(x_0)\\ \sup\limits_{y\in eo(x_0),y<x}H(y)\end{cases}$$.

Observation1’: $$\hat H$$ is increasing and continuous.

$$\hat H$$ is increasing follows from the supremum construction and Observation1.

As for the continuity, observe that a monotonically increasing function is discontinuous if and only if there is an open interval that is not located in the image of the function which contradicted to the fact that the image of $$H$$ is yet dense( recall that the image of $$R_\alpha$$ is dense if $$\alpha$$ irrational).

Observation2’: $$\hat H$$ is of degree 1.

For $$x\notin ex(x_0)$$, $$\hat H(x+1)=\sup\limits_{y\in eo(x_0),y<x+1}H(y)=\sup\limits_{y+1\in eo(x_0),y+1<x+1}H(y+1)\overset{(1)}=\sup\limits_{y\in eo(x_0),y<x}H(y+1)\overset{(2)}= \sup\limits_{y\in eo(x_0),y<x}H(y)+1=\hat H(x)+1$$. (1) holds because $$y\in eo(x_0)$$ iff $$y+1\in ec(x_0)$$.

Obervation3’: $$\hat H \circ F = R_\alpha \circ \hat H$$

For $$x\notin ex(x_0)$$, $$\hat H (F(x))=\sup\limits_{y\in eo(x_0),y<F(x)}H(y)=\sup\limits_{F(y)\in eo(x_0),F(y)<F(x)}H(F(y))=\sup\limits_{y\in eo(x_0),y<x}H(F(y))\overset{(2)}=\sup\limits_{y\in eo(x_0),y<x}R_\alpha( H(y))=\sup\limits_{y\in eo(x_0),y<x}H(y)+\alpha=R_\alpha (\hat H(x))$$

Now set $$h(x):=H(x)mod1,\forall x\in S^1= \mathbb{R}/\mathbb{Z}$$

Proposition: Assume there is $$J\subset \mathbb{R}$$ non-trivial interval where $$\hat H(J)=\{c\}$$ i.e. $$H\lvert_J=c$$ constant. Then $$H$$ is locally constant on an open and dense subset of $$\mathbb{R}$$. (devil staircase)

Proof: Consider the set $$U=\bigcup\limits_{\text{open } J\subset \mathbb{R},H\text{constant on }J}J$$ which is non-empty by assupmtion. Choose a such $$J$$ with $$H$$ constant on it. Observe that $$F^i(J)+j$$ is contained in $$U$$ by construction. Suppose $$U$$ is not dense in $$\mathbb{R}$$, then there exists an open interval $$I\subset\mathbb{R}\backslash U$$. We show that $$H$$ has also to be constant on $$I$$ hence $$I\subset U$$ contradicted! Indeed, if $$H(I)$$ non-constant, then there is two point say  $$i_1\alpha+j_1<i_2\alpha+j_2$$ is contained in the image of $$I$$ under $$H$$. In other word, there is $$F^{i_1}(x_0)+j_1<F^{i_2}(x_0)+j_2$$ . Recall that given $$x,z\in S^1$$ and $$m>n\in\mathbb{N}$$. Then there is $$k\in\mathbb{N}^*$$s.t. $$f^k(z)\in [f^n(x),f^m(x)]$$ when $$\rho (f)$$ irrational. Therefore, for an arbitrary point in $$J$$, say $$y$$ there will be integers $$k$$ and $$l$$ s.t. $$F^k(J)+l\in (F^{i_1}(x_0)+j_1,F^{i_2}(x_0)+j_2)$$. However, $$J$$ cannot intersect with $$I$$, so is $$F^k(J)+l$$, contradicted! In nutshell, we prove that $$H$$ is locally constant on an open and dense subset of $$\mathbb{R}$$.

since that the image of $$H$$ is dense as $$\alpha$$ irrational, there will be a

We point out that the semi-conjugacy may fail to improve without proper rigidity.

### The Denjoy Example

Theorem: Given $$\alpha\in \mathbb{R}\backslash \mathbb{Q}$$, there exists a $$C^1$$-orientation-perserving diffeomorphism $$f:S^1\rightarrow S^1$$ with $$\rho(f)=\alpha(mod1)$$ such that $$f$$ has no dense trajectory i.e. non-transitive. In particular, $$f$$ is not conjugate to $$R_\alpha$$.

Remark: The idea is we consider the orbit of a point which scattered along the circle. And replace each point with an elaborately chosen interval with proper length. We design the orbit of a particular point to be non-dense. Then $$f$$ non-transitive for $$\rho(f)\in \mathbb{R}\backslash \mathbb{Q}$$.

Proof of the theorem: Choose positive number $$l_m:=\frac{c}{(\lvert m\rvert+2)(\lvert m\rvert+3)}$$ where $$c>0$$ such that $$\sum\limits_{m\in\mathbb{Z}}l_m=1$$ and interval $$I_m:=[a_m,b_m]$$ where $$a_m:=\sum\limits_{k\in J_m}l_k, J_m:=\{k\in \mathbb{Z}:R^k_\alpha(x_0)\in [x_0,R^m_\alpha(x_0))\}$$ and $$b_m=a_m+l_m$$ .

Observation: When $$m=0$$, $$J_m$$ empty hence $$a_0=0$$. Otherwise, $$J_m$$ nonempty and a subset of integer hence $$a_m\in (0,1)$$. Moreover, $$b_m=\sum\limits_{k\in J_m\cup \{m\}}l_k$$ hence $$b_m\in (0,1)$$ as well.

$$\forall x\in I_m=[a_m,b_m],g(x):=1+6\frac{l_{m+1}-l_{m}}{l_m^3}(b_n-x)(x-a_m)$$.

Observation: $$I_n$$ are pairwise disjoint. For $$I_m$$ and $$I_n$$, either $$J_m\subsetneq J_n$$ or $$J_m\supsetneq J_n$$ since $$\alpha$$  irrational. We may assume $$J_m\subsetneq J_n$$, then $$b_m=\sum\limits_{k\in J_m\cup \{m\}}l_k\leq \sum\limits_{k\in J_n}l_k=a_n$$. Notice $$\sum\limits_{m\in\mathbb{Z}}\lvert I_m \rvert=\sum\limits_{m\in\mathbb{Z}}l_m=1$$ indicating $$\bigcup\limits_{m\in \mathbb{Z}}I_m$$ is dense.

Observation: $$g:S^1\rightarrow \mathbb{R}^+$$ is continuous satisfying $$\int_{a_m}^{b_m}g(t)dt=l_{m+1}>0$$. Firstly $$g(a_m)=g(b_m)=1$$, it suffices to show that $$g\vert*{I_m}\equiv 1 ,m\rightarrow \infty$$. For $$m\geq 0 ,l*{m+1}<l_{m}$$, we have $$1\geq g\vert*{I_m}（x）\geq1-6\frac{l*{m}-l_{m+1}}{l_m^3}(l_m/2)^2\rightarrow 1$$. For $$m< 0 ,l_{m+1}>l_{m}$$, we have $$1\leq g\vert*{I_m}（x）\leq1+6\frac{l*{m+1}-l_{m}}{l_m^3}(l_m/2)^2\rightarrow 1$$. Therefore $$g$$ continuous.

We are now ready to construct $$f:S^1\rightarrow S^1$$ by $$f(x)=a_1+\int_0^xg(t)dt$$.

Key observation: $$f(0)=a_1$$ and $$f(a_1)=a_1+\int_0^{a_1}g(t)dt=a_1+\int_{\bigcup \limits_{I_m\subset [0,a_1]}I_m}g(t)dt=a_1+\sum\limits_{I_m\subset [0,a_1]}\int_{I_m}g(t)dt=a_1+\sum\limits_{I_m\subset [0,a_1]}l_{m+1}$$. Notice $$I_m\subset [0,a_1]$$ if and only if $$m\in J_1$$. Therefore, $$f(a_1)=a_1+\sum\limits_{m\in J_1}l_{m+1}=a_1+\sum\limits_{k\in \mathbb{Z}:R^k_\alpha(x_0)\in [R_\alpha(x_0),R^2_\alpha(x_0))}l_{k}=a_1+\sum\limits_{m\in J_2\backslash J_1}l_{m}=a_2$$. Inductively, we have $$f^m(0)=a_m$$.

Notice $$\omega(0)\subset S^1\backslash \bigcup \limits_{n\in\mathbb{Z}}\dot I_n$$, the converse is also true since $$\bigcup\limits_{m\in \mathbb{Z}}I_m$$ is dense. Since $$\rho(f)$$ irrational $$\omega(x)=\omega(0)=S^1\backslash \bigcup \limits_{n\in\mathbb{Z}}\dot I_n,\forall x\in S^1$$. This show that $$x$$ has no dense orbit indicating that $$f$$ is non-transitive.

Remark: $$g$$ continuous, positive and normal( $$\int_0^1g(t)dt=1$$) implies $$f(x)=a_1+\int_0^xg(t)dt$$ is a diffeomorphism.

### Uniform long-term behavior

When the rotation number turns irrational, roughly speaking, there seem to be only one orbit.

Definition: (1)The $$\omega$$-limit set for $$(X,f)$$ of $$x$$ is defined by $$\omega(x):=\{y\in X: \exists n_i\rightarrow +\infty s.t.f^{n_i}\rightarrow y ,i\rightarrow +\infty\}$$ (2)The $$\alpha$$-limit set for $$(X,f)$$ of $$x$$ is defined by $$\alpha(x):=\{y\in X: \exists n_i\rightarrow -\infty s.t.f^{n_i}\rightarrow y ,i\rightarrow +\infty\}$$

Proposition: If $$\rho(f)$$ irrational, then $$\omega(x)=\omega(y),\forall x,y\in S^1$$.

The proposition basically based on the following observation: Given $$x,z\in S^1$$ and $$m>n\in\mathbb{N}$$. Then there is $$k\in\mathbb{N}^*$$s.t. $$f^k(z)\in [f^n(x),f^m(x)]$$ when $$\rho (f)$$ irrational.

Assuming this observation, we proof the proposition. For $$x_0\in \omega$$ i.e. $$n_i\rightarrow +\infty s.t.f^{n_i}(x)\rightarrow x_0,i\rightarrow +\infty$$, there is $$k_i\in \mathbb{N}$$  s.t.$$f^{k_i}(y)\in [f^{n_i}(x),f^{n_{i+1}}(x)],\forall i$$. One can always choose $$k_{i+1}>k_i$$,by plugging $$x=f^{k_i}(y)$$ so that $$k_i\rightarrow +\infty$$ as $$i\rightarrow +\infty$$. Since $$f^{n_i}(x)\rightarrow x_0$$ we have $$f^{k_i}(y)\rightarrow x_0$$ i.e. $$x_0\in \omega (y)$$ hence $$\omega(x)\subset \omega(y)$$. By symmetry $$\omega(x)=\omega(y)$$.

Now let’s prove the observation: Denote $$I=[f^n(x),f^m(x)]$$. Consider $$\mathscr{I}:=\{\rho^{-k(m-n)}(I): k\in\mathbb{N}^*\}$$. Notice these bunch of intervals share at most a boundary point in common. Then either(1) $$\mathscr{I}$$ converges to a point $$y\in S^1$$ or (2) a finite union of the intervals cover $$S^1$$ since $$f$$ is an orientation-preserving homeomorphism. But (1) cannot happen since $$f^{-(m-n)}(y)=y$$ indicates that $$y$$ is a periodic point leading $$\rho(f)$$ rational, contradicted the pre-requirement that $$\rho (f)$$ irrational. On the other hand, (2) establishes the observation.

Remark: In the above argument $$f$$ orientation-preserving and $$\rho(f)$$ irrational are crucial to establish the phenomenon where two point are homogenous when it comes to the long term orbit behavior. Once we eliminate one of them, the proposition doesn’t hold anymore: (1) If we don’t assume $$f$$ is orientation-preserving, the reflection map $$r:S^1\rightarrow S^1,x\mapsto -x$$, then every point is $$2$$-periodic hence $$\omega(x)=\{x,-x\}$$. (2) If we don’t assume $$f$$ with irrational rotation number, say $$\rho(f)=0$$, we can choose $$f=id_{S^1}$$where $$\omega(x)=\{x\}$$.