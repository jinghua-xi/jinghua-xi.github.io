---
layout: post
title: The geometry of number
date: 2023-08-23 00:00:00-0400
description: introduction of Minkowski Theorem
tags: number-theory
categories: number-theory
related_posts: false
---

### Motivation

Definition: A lattice $\Lambda\sub \R^n$ is the image of group homomorphism $\Z^n \rightarrow \R^n$ with full rank. Denote $\Lambda _s$ as the image of the structure map $i:\Z^n\rightarrow \R^n$. Since almost all the result in $\Lambda_s$ can get tranformed into $\Lambda$ by scalar of the determinent of the transformation, we mainly focus on $\Lambda_s$ in the following paragraphs.

Guiding question: Given a subset of $\R^n$ of “good shape”, is there any relativity between $m(S)$ and $\#\{S\cap \Lambda\}$. We call $S\sub \R^n$ is of good shape if it is bouonded, convex and centrally symmetric.

### A few words on the integrability of indicator function

Theorem(Lebegue): A function $f:U\rightarrow \R$ is Riemann integrable iff the discontinuity set of $f$ is of measure zero. 

Corollary: For a bounded set $S\sub \R^n$, the indicator $\chi_S$ is Riemann integrable iff the $\partial S$ is of measure zero. Observe that the discontinuity set of $\chi_S$ is exactly $\partial S$.

Remark: we call set $S$ of this fasion to be Jordan measurable.

Observation: a section of bounded convex set is alsobouded convex and a bouded convex set of dimension 1 i.e. interval is Jordan measurable.

Lemma:  By Fobini theorem,bouded convex set $S$ is Jordan measurable thus $\chi_S$ Riemann integrable.

### In what sense should we view volume

The process of partition for calculating the Riemann intergral is exactly the process of construct the Lebegue measure:

Proposition: If $S$ is Jordan measurable, then $\int_{\R^n}\chi_S=m(S)$.

Sketch of the proof: Find a partition $P$, expand a little yields $m(S)\leq U(\chi_S,P)$. Shrink a little yields $m(S)\geq L(\chi_S,P)$.

Corolary: $m(S)=\int\chi_S=\lim\limits_{L\rightarrow\infin}\#\{S\cap \frac{1}{L}\Lambda_s\}\cdot\frac{1}{L^n}$ since $\frac{1}{L}\Lambda_s$ induces a partition of $S$ in a nature way.

### Main theorem

Minkowski’s Fundamental Theorem: If a good shaped $S$ with $m(S)>2^n$, then $S$ intersects with $\Lambda_s$ non-trivially.

Proof: By corolary above, there exists an integer $L$ such that $\#\{S\cap \frac{1}{L}\Lambda_s\}\cdot\frac{1}{L^n}>1$ i.e. $\#\{S\cap \frac{1}{L}\Lambda_s\}>L^n$. In other word, there will be to much “lattice” inside $S$.

We endow a equivalent relation on $S\cap \frac{1}{L}\Lambda_s$ : $x\sim y$  iff $x-y\in \Lambda_s$. There all utmost $L^n$ congrence classes. Hnece there must be $a,b\in S\cap \frac{1}{L}\Lambda_s$ such that $a-b\in \Lambda_s$. Notice $S$ is centrally symmetric, the point $a-b$ also locates in $S$. Whence $a-b\in S\cap \frac{1}{L}\Lambda_s$ non-trivial. 

Remark: $S$ of good shape has enough volume is equivalent to it contains enough points inside. Then everything follows from pigon holes principle.

Actually we can ignore the shape information of $S$ and obtain the essential observation:

Blechfeldt’s Theorem: A bounded $C\sub \R^n$ with volume exceeding 1 admits two points $x,y\in C$ such that $x-y\in \Lambda_s$.

We show an equivalent form: For a bounded $C\sub \R^n$ with volume exceeding N, after an appropriate translation, the set covers at least $N+1$  lattice.

Partition $C$ as $C_1,...,C_k$ and translate them inside another square $R$ with whose original square aligned. Suppose each point in $R$ is covered by less than $N$ many of $C_i$, then the volume of $C$ is no greater than $N$ since Lebegue measure are translation invariant. Therefore there is a such point $p\in R$ thus the $N+1$  primages of $p$ whose mutual difference lies in $\Lambda_s$. This completes the proof.

### Application in the geometry of numbers

Simultaneous Diophantine Approximation:

For $\alpha_1,...,\alpha_n\in\R$, there exsists infinitely many tuples of integer $p_1,...,p_n,p$ with $p\geq1$ such that $\|\frac{p_i}{p}-\alpha_i\|\leq\frac{1}{p^{1+1/n}}$

Consider $S_\varepsilon=\{x\in \R^{n+1}:\|x_i-\alpha_ix_{n+1}\|\leq\varepsilon,i=1,...,n,\|x_{n+1}\|\leq\varepsilon^{-n}\}$ which is of good shape.

Take $u_i=\frac{1}{s}(x_i-\alpha_iy),v=s^ny$ and denote the transformation as $\phi$. Then $\phi(S)$ is defined by $\|u_i\|\leq1,\|v\|\leq1$. So $m(S)=m(\phi(S))/det(\phi)=2^n/1=2^n$.

Hence by Minkowski’s Fundamental Theorem, the region $S$ contains a lattice point $(p_1,...,p_n,p)$ other than the origin. 

Observe that $p\neq0$, we may assume that $p>0$. Notice $\|\frac{p_i}{p}-\alpha_i\|\leq\frac{s}{p}$ and combine with the construction of $S_\varepsilon$ i.e. $\varepsilon \leq p^{-1/n}$, we have $p_1,...,p_n,p$ indeed a desired Diophantine approximation. 

To show the infinity, keep choosing $\varepsilon$  so small that $\|p_i-\alpha_ip\|>\varepsilon$ for all exsisting solutions. Then the new $\varepsilon$ yields another solution.
